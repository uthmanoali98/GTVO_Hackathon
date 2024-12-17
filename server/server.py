from flask import Flask, request, jsonify, send_file
from pathlib import Path
from openai import OpenAI
from newspaper import Article
import os
import json
import re


# Initialize Flask app
app = Flask(__name__)

# OpenAI API Initialization
client = OpenAI(
        api_key=''
)

def fetch_article_content(url):
    """Fetch article content from a URL."""
    article = Article(url)
    article.download()
    article.parse()
    return article.title, article.text

def sanitize_filename(title):
    """Create a sanitized filename from the article title."""
    return re.sub(r'[^a-zA-Z0-9_]', '_', title)[:50]  # Limit filename length to 50 characters

def determine_political_bias(content):
    """Use OpenAI API to determine political bias on a 5-point scale."""
    prompt = (
        "Analyze the following text and determine its political bias on a 5-point scale: \n\n"
        "1. Extremely Liberal\n"
        "2. Liberal\n"
        "3. Neutral\n"
        "4. Conservative\n"
        "5. Extremely Conservative\n\n"
        f"{content}\n\n"
        "Respond with only one of these categories."
    )
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that evaluates political biases."},
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content.strip()

def summarize_article_for_gen_z(content):
    """Use OpenAI API to summarize the article in a Gen Z-friendly tone."""
    prompt = (
        "Introduce yourself as PoliSonic an AI tool for young people to understand the political landscape then Summarize the following article for an audience aged 17-25 in a way that is clear, informative, and relevant. "
        "Keep the tone engaging and conversational but not overly casual. End the summary with critical thinking questions "
        "or a relatable scenario that connects the article's themes to the everyday lives of young people, especially as they "
        "navigate issues like civic engagement, decision-making, or staying informed:\n\n"
        f"{content}\n\n"
    )
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that summarizes text for a Gen Z audience."},
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content.strip()

def generate_critical_questions(summary):
    """Generate 3 critical questions and answers based on the summary text."""
    prompt = (
        "Based on the following summary, generate three critical thinking questions that young voters (aged 17-25) can consider. "
        "Provide sample answers to each question. The response MUST be in valid JSON format as a list of objects, where each object "
        "contains 'question' and 'answer' fields. Do not include extra text, explanations, or formatting outside JSON:\n\n"
        f"{summary}\n\n"

    )
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that generates critical thinking questions and answers."},
            {"role": "user", "content": prompt}
        ]
    )
    # Parse response into a JSON list
    print("Raw response from OpenAI:", response.choices[0].message.content.strip())
    
    raw_content = response.choices[0].message.content.strip()
    if raw_content.startswith("```json") and raw_content.endswith("```"):
        raw_content = raw_content[7:-3]  # Remove the ```json and ``` delimiters
    critical_questions = json.loads(raw_content)

    return critical_questions

def generate_audio_summary(text, filename="summary.mp3"):
    """Convert text to speech using OpenAI's TTS API and save as an audio file."""
    response = client.audio.speech.create(
        model="tts-1",  # High-definition TTS model
        input=text,
        voice="alloy" # Choose a voice; 'alloy' is a default option
    )

    response.stream_to_file(filename)
    return filename

@app.route("/summarize", methods=["POST"])
def summarize():
    try:
        # Get the URL from the request
        data = request.json
        article_url = data.get("url")

        if not article_url:
            return jsonify({"error": "No URL provided."}), 400

        # Step 1: Fetch article content
        title, content = fetch_article_content(article_url)
        sanitized_title = sanitize_filename(title)
        audio_filename = f"{sanitized_title}_summary.mp3"

       

        # Step 2: Determine political bias
        bias = determine_political_bias(content)

        # Step 3: Summarize for Gen Z
        summary = summarize_article_for_gen_z(content)

        # Step 4: Generate critical questions and answers
        critical_questions = generate_critical_questions(summary)
        #print(critical_questions)

        # Step 5: Generate audio summary
        audio_file = generate_audio_summary(summary, audio_filename)

        # Return JSON response and audio file
        return jsonify({
            "title": title,
            "bias": bias,
            "summary": summary,
            "critical_questions": critical_questions,
           "audio_file": request.host_url + f"download/audio/{audio_filename}"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/download/audio/<filename>", methods=["GET"])
def download_audio(filename):
    try:
        return send_file(filename, as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
