// src/components/ArticlePage.jsx
import React from 'react';
import QAComponent from './QAComponent';
import './ArticlePage.css';
import { useLocation } from 'react-router-dom';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import BiasImage from './BiasImage';
import AudioTranscript from './AudioTranscript';
import QuizCard from './QuizCard/QuizCard';

const dummyQuestions = [
  { question: "The sun rises in the west. Lorem ipsum dolor sit amet consectetur. Id ut mus bibendum dolor nullam laoreet pretium aliquet. Dolor porta ut iaculis amet diam massa facilisis. Habitant diam orci bibendum amet magna ut enim ac. Tortor nulla viverra ", answer: "False" },
  { question: "Water freezes at 0 degrees Celsius.", answer: "True" },
  { question: "The capital of France is Berlin.", answer: "False" },
];
import CommunityNote from './CommunityNotes/CommunityNote';


const sampleArticleData = {
  title: "Artificial Intelligence and the Future of Work",
  source: "BBC News",
  image: "https://placehold.co/400x200?text=Article+Image",
  summary: `Hey there, I'm PoliSonic, here to help you navigate the political scene in a way that's easy to understand. 
  President-elect Trump surprised many by inviting Chinese President Xi Jinping to his upcoming inauguration. 
  This gesture came amid rising fears of a trade war between the two countries.
  
  However, sources have indicated that Xi might not accept the invitation. 
  The invitation came at a time when the U.S. intelligence community revealed a significant cyber attack on U.S. telecom companies by Chinese hackers.
  
  This attack compromised the data of millions of Americans, including Vice President-elect JD Vance.`,
  critical_questions: [
    {
      question: "How might Trump's invitation to Xi Jinping impact U.S.-China relations?",
      answer: "Trump's invitation could signal an attempt to improve diplomatic ties, but it may also raise concerns among U.S. allies about his stance on trade and security."
    },
    {
      question: "What are the implications of the cyber attack on U.S. telecom companies?",
      answer: "The attack highlights vulnerabilities in critical infrastructure and raises concerns about national security and data privacy for millions of Americans."
    },
    {
      question: "How can young voters critically analyze media narratives about international relations?",
      answer: "Young voters can compare multiple sources, question biases, and evaluate facts before forming opinions on global issues."
    }
  ],
  audio_file: "http://localhost:3000/sample.mp3",
  bias: "4. Very Liberal"
};
const dummyNotes = [
  {
    url: 'https://www.nytimes.com/',
    description: 'Lorem ipsum dolor sit amet consectetur. Eu in eleifend tempor sed in convallis nec turpis fermentum.',
    author: 'First Last',
    initialScore: 2,
  },
  {
    url: 'https://www.cnn.com/',
    description: 'Another community note example with meaningful content to test the component rendering.',
    author: 'Jane Doe',
    initialScore: 3,
  },
];

const ArticlePage = () => {
  const { source, imageUrl, transcript, faqs } = sampleArticleData;
  const location = useLocation();
  const { articleData } = location.state || {};
  const { title, summary, critical_questions, audio_file, bias, image } = articleData || sampleArticleData;


  if (!articleData) {
    const {
      title,
      summary,
      critical_questions,
      audio_file,
      bias,
      image
    } = articleData || sampleArticleData;
  }

  return (
    <div className="article-page-container">
      <div className="article-hero">
        <img src={image} alt={title} className="article-hero-image" />
      </div>
      <div className="article-content padding-all">
        <h1 className="article-title">{title}</h1>
        <p className="article-source">Source: {source}</p>
        <AudioTranscript transcript={summary} />
        <BiasImage bias={bias} />
        <QuizCard quizQuestions={dummyQuestions} />
        <h2 className="section-heading">Critical Questions</h2>
        {critical_questions.map((faq, idx) => (
          <QAComponent
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
        <h2>Community Notes</h2>
        {dummyNotes.map((note, idx) => (
          <CommunityNote key={idx} note={note} />
        ))}
      </div>
      <AudioPlayer audioSrc={audio_file} />
    </div>
  );
};

export default ArticlePage;