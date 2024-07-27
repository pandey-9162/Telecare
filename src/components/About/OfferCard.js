import React from 'react';
import './OfferCard.css';

const OfferCard = ({ image, title, content }) => {
    return (
        <div className="offer-card">
            <img src={image} alt={title} className="offer-card-image" />
            <div className="offer-card-content">
                <h3 className="offer-card-title">{title}</h3>
                <p className="offer-card-text">{content}</p>
            </div>
        </div>
    );
};

export default OfferCard;
