import React from 'react';

function Hero({ title, description, datesText, cityName }) {
    return (
            <div className="hero-container">
                <div className='hero-title-container'>
                    <div className="hero-title">{title}</div>
                    <div className="hero-description">{description}</div>
                </div>
                <img src="foreground-car.png" className="foreground-car"></img>
                <div className="gradient"></div>
                <div className="hero-weekend-container">
                    <div className="hero-dates">
                        <img src='icon-calendar.png'></img>
                        <div>{datesText}</div>
                    </div>
                    <div className="hero-country">
                        <img src='flag.png'></img>
                        <div>{cityName} </div>
                    </div>
                </div>
            </div>
    );
}

export default Hero;
