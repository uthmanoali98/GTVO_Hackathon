// src/components/ArticleCard.jsx
import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const { title, description, source, imageUrl } = article;
  return (
    <div className="article-card">
      <div className="image-container">
        <div className='image-filter'></div>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='black-divider'></div>
      <div className="content">
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
        <p className="article-source">Source: {source}</p>
      </div>
    </div>
  );
};

export default ArticleCard;