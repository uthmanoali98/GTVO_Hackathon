// src/components/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './HomePage.css';

const ALL_CATEGORIES = ['All', 'Politics', 'Economy', 'Healthcare', 'Technology'];
const ARTICLES = [
  {
    title: 'Artificial Intelligence and the Future of Work',
    description: 'Explore expert insights into how AI is transforming job landscapes, increasing productivity, and raising questions about ethics, employment, and adaptability...',
    source: 'BBC News',
    imageUrl: 'https://placehold.co/400x200?text=AI+Work',
    category: 'Economy',
  },
  {
    title: 'The Rise of Renewable Energy in Rural Communities',
    description: 'Delve into how solar and wind power are energizing small towns...',
    source: 'NPR',
    imageUrl: 'https://placehold.co/400x200?text=Renewable+Energy',
    category: 'Technology',
  },
  {
    title: 'Artificial Intelligence and the Future of Work',
    description: 'Expert insights into how AI is transforming job landscapes...',
    source: 'BBC News',
    imageUrl: 'https://placehold.co/400x200?text=AI+Work+2',
    category: 'Politics',
  },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false); // To show a loading indicator
  const navigate = useNavigate();

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(article => article.category === selectedCategory);

  const fetchArticleData = async () => {
    if (!inputValue) return;

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: inputValue }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to ArticlePage and pass the data as state
        navigate('/article', { state: { articleData: data } });
      } else {
        console.error('Error:', data.error);
        alert('Failed to fetch article summary. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error);
      alert('An error occurred. Check your server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-container">
      <div className="hero">
        <h1 className="hero-title">PoliSonic</h1>
        <p className="hero-subtitle">Transform news articles into short audio summaries to listen and learn.</p>
      </div>
      <div className="sticky-search-container">
        <input
          className="search-input"
          placeholder="Paste article URL here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button className="search-button" onClick={fetchArticleData} disabled={loading}>
          {loading ? '...' : '➤'}
        </button>
      </div>
      <section className="content-section">
        <h2 className="section-title">Not sure what to listen to?</h2>
        <p className="section-subtitle">Browse our featured articles below and stay informed on topics that matter.</p>
        <div className="categories-wrapper">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="articles-grid">
          {filteredArticles.map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;