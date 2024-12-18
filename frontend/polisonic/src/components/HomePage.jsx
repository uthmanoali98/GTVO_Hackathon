// src/components/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './HomePage.css';
import Lottie from 'react-lottie-player';
import PoliSonic from '../assets/PoliSonic.json'; // Import Lottie JSON
import image1 from '../assets/image01.jpg';
import image2 from '../assets/image02.jpg';
import image3 from '../assets/image03.jpg';
import image4 from '../assets/image04.jpg';
import image5 from '../assets/image05.jpg';
import image6 from '../assets/image06.jpg';
import image7 from '../assets/image07.jpg';
import image8 from '../assets/image08.jpg';
import image9 from '../assets/image09.jpg';
import heroimage from '../assets/hero-image.jpg';

const ALL_CATEGORIES = ['All', 'Politics', 'Economy', 'Healthcare', 'Technology', 'Culture', 'Climate'];
const ARTICLES = [
  {
    title: 'Embracing AI in the Modern Workplace',
    description: 'As businesses continue to integrate artificial intelligence into their operations, employees find themselves collaborating with advanced tools that streamline workflows and enhance creativity. From automated data analysis to personalized client communication, AI enables professionals to focus on strategic tasks rather than mundane chores. This shift not only boosts productivity, but also encourages teams to learn new skills and adapt to evolving roles. As a result, offices are transforming into dynamic environments where human intuition merges seamlessly with digital solutions. With companies experimenting at unprecedented rates, the future of work promises to be more engaging, efficient, and profoundly interconnected.',
    source: 'The New York Times',
    imageUrl: image1,
    category: 'Economy',
  },
  {
    title: 'Renewable Energy Powers Rural Revival',
    description: 'In remote communities once reliant on dwindling resources, a new era of sustainability is taking root through renewable energy projects. Solar farms, wind turbines, and microgrids are revitalizing local economies, providing clean electricity and stable income streams. As families prosper from lower utility costs and expanding job opportunities, these communities gain a renewed sense of purpose and resilience. In fields where once only drought and uncertainty reigned, clean energy installations now cultivate growth, collaboration, and independence. As technology improves and global demand rises, rural areas stand poised to emerge as sustainable energy hubs, forging a brighter path for future generations.',
    source: 'NPR',
    imageUrl: image2,
    category: 'Technology',
  },
  {
    title: 'A Conscious Wardrobe for a Changing World',
    description: 'As consumers grow more mindful of the environmental impact of their wardrobes, sustainable fashion brands are stepping up to meet the demand. Ethical sourcing, biodegradable materials, and fair labor practices have become hallmarks of a new era in clothing production. Shoppers discover quality garments that balance style, comfort, and social responsibility. In local boutiques and online platforms, eco-friendly collections celebrate craftsmanship, innovation, and diversity of design. By choosing timeless pieces over fast-fashion fads, individuals contribute to a healthier planet and more equitable working conditions. This fashion revolution invites everyone to dress with intention, aligning personal values with global stewardship.',
    source: 'BBC News',
    imageUrl: image3,
    category: 'Economy',
  },
  {
    title: 'Coastal Communities Chart a New Course',
    description: 'In coastal villages shaped by generations of seafaring traditions, communities are navigating profound changes. Climate shifts, evolving regulations, and shifting consumer preferences demand novel approaches to fishing, tourism, and marine conservation. Entrepreneurs reinvent small businesses, offering eco-tours that highlight local ecology and maritime heritage. Traditional practices blend with cutting-edge research to ensure healthy fisheries and stable incomes. By championing responsible stewardship, these towns turn challenges into opportunities, securing their cultural legacy and safeguarding resources. As they embrace resilience and adaptation, coastal residents illustrate how ingenuity and collaboration can guide them toward a sustainable, prosperous future.',
    source: 'The Guardian',
    imageUrl: image4,
    category: 'Economy',
  },
  {
    title: 'Pastoral Innovations Sustain Family Farms',
    description: 'In rolling pastures dotted with grazing flocks, small-scale farmers are reimagining traditional agriculture. Embracing regenerative techniques, they rotate crops, enhance soil fertility, and minimize chemical inputs. Farmers create diverse revenue streams—artisan cheeses, wool products, and farm-to-table experiences—to weather market fluctuations and preserve rural lifestyles. Consumers, eager for transparency and authenticity, support these enterprises by purchasing directly from farms or joining community-supported agriculture programs. These measures bolster economic viability and help family farms thrive. As these pastoral pioneers prove, innovation and responsible stewardship can secure the livelihoods of future generations and nurture a resilient, sustainable food system.',
    source: 'Associated Press',
    imageUrl: image5,
    category: 'Economy',
  },
  {
    title: 'Programming the Future of Innovation',
    description: 'As lines of code shape the digital landscape, developers stand at the forefront of groundbreaking innovation. From smartphone apps and cloud computing to machine learning and cybersecurity, code powers the tools that connect us. Skilled programmers embrace continuous learning, mastering new languages, frameworks, and best practices. In collaborative spaces, they share expertise, refine algorithms, and solve complex problems. This ethos of openness fuels technological advancement, empowering startups and industry giants alike. The result is a dynamic ecosystem that drives efficiency, inspires creativity, and sparks new possibilities. In a code-driven world, the future belongs to those who build it.',
    source: 'Wired',
    imageUrl: image6,
    category: 'Technology',
  },
  {
    title: 'Cultural Festivals Bridge Global Divides',
    description: 'Across continents, vibrant festivals bring communities together, fostering understanding and admiration for diverse traditions. Music, dance, and culinary delights create shared experiences that transcend language barriers. Attendees discover new perspectives, celebrating differences while finding common ground in art. Such events spark economic activity, attracting visitors who support local artisans and performers. As cultural exchange flourishes, stereotypes dissolve, replaced by curiosity and empathy. Communities gain pride in their heritage and confidence in a more inclusive future. When people gather to celebrate, they weave threads of unity that strengthen the global tapestry.',
    source: 'National Geographic',
    imageUrl: image7,
    category: 'Politics',
  },
  {
    title: 'Family Health Takes Center Stage',
    description: 'As parents navigate modern challenges, prioritizing family health becomes central to well-being. Balanced meals, regular exercise, and mental wellness resources redefine what it means to thrive together. Pediatricians emphasize preventive care, nutritionists recommend sustainable diets, and community programs support stress management. Parents encourage outdoor play and limit screen time, fostering resilience and creativity in their children. By engaging in local health initiatives—yoga classes, nature hikes, cooking workshops—families build lasting habits that promote vitality. This holistic approach ensures that family life not only endures, but blossoms in a healthier future, inspiring generations to embrace wellness as a shared endeavor.',
    source: 'CNN',
    imageUrl: image8,
    category: 'Healthcare',
  },
  {
    title: 'Precision Medicine Transforms Healthcare',
    description: 'In advanced operating rooms and research labs, precision medicine is reshaping patient care. Rather than rely solely on one-size-fits-all treatments, doctors tailor therapies to individual genetics, lifestyles, and environments. This personalized approach enhances outcomes, reduces side effects, and strengthens patient-provider trust. Breakthroughs—genetic sequencing, AI-driven diagnostics, and 3D-printed organs—accelerate targeted therapy development. As clinicians partner with data scientists and engineers, new possibilities emerge for early intervention and more efficient healthcare systems. With precision medicine, patients receive interventions that feel less like guesswork and more like true medical partnerships, ultimately forging a future where care is both effective and compassionate.',
    source: 'Reuters',
    imageUrl: image9,
    category: 'Healthcare',
  }
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false); // Track input focus
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
      <div className="hero padding-all">
        <div className="logo-container">
          {/* PoliSonic Logo */}
          <h1 className="hero-title">PoliSonic</h1>
          {/* Lottie Animation */}
          <div className='lottie-container'>
            <Lottie
              animationData={PoliSonic}
              play
              loop
              style={{ width: 75, height: 75 }}
            />
          </div>
        </div>
        <h4 className="hero-subtitle">Transform news articles into short audio summaries to listen and learn.</h4>
      </div>
      <div className="sticky-search-container padding-lrt">
        <input
          className={`search-input ${isFocused ? 'active' : ''} ${inputValue ? 'filled' : ''}`}
          placeholder="Paste article URL here"
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={`search-button border-all-default ${inputValue ? 'filled' : ''}`}
          onClick={fetchArticleData}
          disabled={!inputValue || loading}
        >
          {loading ? (
            '...'
          ) : (
            <div className='svg-container'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-icon"
              >
                <path d="M10.7542 2L20 12M20 12L10.7542 22M20 12H0"></path>
              </svg>
            </div>
          )}
        </button>
      </div>
      <div className='padding-all'>
        <div className="hero-image-container border-all-default">
          <div className='image-filter'></div>
          <img className='img-hero' src={heroimage} alt='hero' />
        </div>
      </div>
      <div className='padding-vertical'>
        <div className='line-div'></div>
      </div>
      <section className="content-section">
        <div className='padding-all'>
          <h2 className="section-title">Not sure what to listen to?</h2>
          <p className="section-subtitle">Browse our featured articles below and stay informed on topics that matter.</p>
        </div>
        <div className="categories-wrapper padding-horizontal">
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
        <div className="articles-grid padding-all">
          {filteredArticles.map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;