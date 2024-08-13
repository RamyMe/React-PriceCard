import React from 'react';
import './PriceCard.css';


const PriceCard = ({ plan, price, features, buttonText }) => {
  return (
    <div className="price-card">
      <h2 className="plan">{plan}</h2>
      <div className="price">{price}</div>
      <hr />
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            {feature.icon ? <i className={`icon ${feature.icon}`}></i> : null}
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="button">{buttonText}</button>
    </div>
  );
};

export default PriceCard;
