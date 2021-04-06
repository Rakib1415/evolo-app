import React from 'react';

const CardPrice = () => (
    <div className="card">
        <div className="card-body">
            <div className="card-title">STARTER</div>
            <div className="card-subtitle">Just to see what can be achieved</div>
            <hr className="cell-divide-hr" />
            <div className="price">
                <span className="currency">$</span>
                <span className="value">199</span>
                <div className="frequency">monthly</div>
            </div>
            <hr className="cell-divide-hr" />
            <ul className="list-unstyled li-space-lg">
                <li className="media">
                    <i className="fas fa-check" />
                    <div className="media-body">Improve Your Email Marketing</div>
                </li>
                <li className="media">
                    <i className="fas fa-check" />
                    <div className="media-body">User And Admin Rights Control</div>
                </li>
                <li className="media">
                    <i className="fas fa-times" />
                    <div className="media-body">List Building And Cleaning</div>
                </li>
                <li className="media">
                    <i className="fas fa-times" />
                    <div className="media-body">Collected Data Management</div>
                </li>
                <li className="media">
                    <i className="fas fa-times" />
                    <div className="media-body">More Planning And Evaluation</div>
                </li>
            </ul>
            <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#request">
                    REQUEST
                </a>
            </div>
        </div>
    </div>
);

export default CardPrice;
