import React from 'react';
import CardPrice from './CardPrice';

const Pricing = () => (
    <div id="pricing" className="cards-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Multiple Pricing Options</h2>
                    <p className="p-heading p-large">
                        We have prepared pricing plans for all budgets so you can get started right
                        away. They are great for small companies and large organizations
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <CardPrice />
                    <CardPrice />
                    <CardPrice />
                </div>
            </div>
        </div>
    </div>
);

export default Pricing;
