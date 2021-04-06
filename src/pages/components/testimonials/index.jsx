import React from 'react';
import testimonial1 from '../../../assets/images/testimonial-1.svg';
import testimonial2 from '../../../assets/images/testimonial-2.svg';
import testimonial3 from '../../../assets/images/testimonial-3.svg';
import testimonialMenTaking from '../../../assets/images/testimonials-2-men-talking.svg';
import Slider from './Slider';

const Testimonials = () => (
    <div className="slider-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={testimonialMenTaking} alt="alternative" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>Testimonials</h2>

                    <div className="slider-container">
                        <div className="swiper-container card-slider">
                            <div className="swiper-wrapper">
                                <Slider img={testimonial1} />
                                <Slider img={testimonial2} />
                                <Slider img={testimonial3} />
                            </div>

                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Testimonials;
