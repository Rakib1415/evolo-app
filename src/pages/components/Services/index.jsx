import React from 'react';
import serviceIcon1 from '../../../assets/images/services-icon-1.svg';
import serviceIcon2 from '../../../assets/images/services-icon-2.svg';
import serviceIcon3 from '../../../assets/images/services-icon-3.svg';
import Card from './Card';

const Services = () => (
    <div id="services" className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Business Growth Services</h2>
                    <p className="p-heading p-large">
                        We serve small and medium sized companies in all tech related industries
                        with high quality growth services which are presented below
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {/* Card component */}
                    <Card img={serviceIcon1} />
                    <Card img={serviceIcon2} />
                    <Card img={serviceIcon3} />
                </div>
            </div>
        </div>
    </div>
);

export default Services;
