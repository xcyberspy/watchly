// /components/FeatureSection.js
import React from 'react';
import '../styles/FeatureSection.css';

const FeatureSection = ({ features }) => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <h2>Our Features</h2>
        <div className="cards">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
