import React from 'react';

const Card = ({ img }) => (
    <div className="card">
        <img className="card-image" src={img} alt="alternative" />
        <div className="card-body">
            <h4 className="card-title">Market Analysis</h4>
            <p>
                Our team of enthusiastic marketers will analyse and evaluate how your company stacks
                against the closest competitors
            </p>
        </div>
    </div>
);

export default Card;
