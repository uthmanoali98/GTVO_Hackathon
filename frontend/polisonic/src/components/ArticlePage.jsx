// src/components/ArticlePage.jsx
import React from 'react';
import QAComponent from './QAComponent';
import './ArticlePage.css';

const sampleArticleData = {
  title: "Artificial Intelligence and the Future of Work",
  source: "BBC News",
  imageUrl: "https://placehold.co/400x200?text=Article+Hero",
  transcript: `Lorem ipsum dolor sit amet consectetur. Id ut nus bibendum dolor nullam laoreet pretium aliquet. Dolor porta ut iaculis amet diam massa facilisis. Habitant diam orci bibendum amet magna ut enim ac. Tortor nulla viverra orci sagittis massa etiam. Dolor vitae pretium fames a nam feugiat. Integer eget accumsan elementum condimentum diam adipiscing.

Mauris venenatis platea tellus varius gravida tempus ornare. Etiam ultricies hendrerit dui accumsan mauris. Placerat facilisis sed eget massa mollis in ultrices. Viverra facilisis quam mattis a integer quam. Viverra curabitur condimentum integer id ultricies purus quis in egestas. Id eu ipsum ullamcorper magna at elementum sollicitudin tristique. Vel nulla enim lacus in et feugiat massa. In lectus adipiscing laoreet neque viverra sed tincidunt.`,
  faqs: [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: `Cras amet sagittis vulputate id. A augue
      ridiculus odio auctor vestibulum sed enim aliquet odio rutrum.
      Id cras est nibh montes mattis scelerisque nullam vulputate.
      Lectus lacus ridiculus id euismod. Volutpat aliquet non in
      ultricies ut amet risus urna vitae. Diam feugiat venenatis
      ut sed risus. Arcu felis morbi pharetra quisque nunc neque
      eros. Ultrices velit gravida at dui tincidunt enim tortor ut.`
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: `Another answer here. Nulla velit nisl, convallis
      at consequat in, ultricies eu lorem. Etiam ac risus a felis
      ornare bibendum.`
    }
  ]
};

const ArticlePage = () => {
  const { title, source, imageUrl, transcript, faqs } = sampleArticleData;

  return (
    <div className="article-page-container">
      <div className="article-hero">
        <img src={imageUrl} alt={title} className="article-hero-image" />
        <h1 className="article-title">{title}</h1>
        <p className="article-source">Source: {source}</p>
      </div>
      <div className="article-content">
        <h2 className="section-heading">Audio Transcript</h2>
        <p className="article-transcript">{transcript}</p>

        <h2 className="section-heading">Critical Questions</h2>
        {faqs.map((faq, idx) => (
          <QAComponent 
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;