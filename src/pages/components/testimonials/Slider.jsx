import React from 'react';

const Slider = ({ img }) => (
    <div className="swiper-slide">
        <div className="card">
            <img className="card-image" src={img} alt="alternative" />
            <div className="card-body">
                <p className="testimonial-text">
                    Love their services and was so amazed with the support and results that I
                    purchased Evolo for two years in a row. They are awesome.
                </p>
                <p className="testimonial-author">Roy Smith - Marketer</p>
            </div>
        </div>
    </div>
);

export default Slider;
