import React from 'react';
import customerLogo1 from '../../../assets/images/customer-logo-1.png';
import customerLogo2 from '../../../assets/images/customer-logo-2.png';
import customerLogo3 from '../../../assets/images/customer-logo-3.png';
import customerLogo4 from '../../../assets/images/customer-logo-4.png';
import customerLogo5 from '../../../assets/images/customer-logo-5.png';
import customerLogo6 from '../../../assets/images/customer-logo-6.png';
import SwiperSlider from './swiperSlide';

const customerLogos = [
    customerLogo1,
    customerLogo2,
    customerLogo3,
    customerLogo4,
    customerLogo5,
    customerLogo6,
];

const Customers = () => (
    <div className="slider-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h5>Trusted By</h5>
                    <div className="slider-container">
                        <div className="swiper-container image-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        {customerLogos.map((logo) => (
                                            <SwiperSlider sliderImg={logo} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Customers;
