import React from 'react';

function Card({ text, label, minutes, icon, image, link }) {
    const cardStyles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <a href={link} target='_blank' className="card" style={cardStyles}>
            <div className="top-container">
                <img src={icon}></img>
            </div>

            <div className="footer-container">
                <div className="card-text">{text}</div>
                <div className="card-footer">
                    <div className="label-container">
                        <span className="label">
                            {label}
                        </span>
                    </div>
                    <div className="time">
                        {minutes}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;