import React from 'react';

const TeamMember = ({ img }) => (
    <div className="team-member">
        <div className="image-wrapper">
            <img className="img-fluid" src={img} alt="alternative" />
        </div>
        <p className="p-large">
            <strong>Mary Villalonga</strong>
        </p>
        <p className="job-title">Product Manager</p>
        <span className="social-icons">
            <span className="fa-stack">
                <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x facebook" />
                    <i className="fab fa-facebook-f fa-stack-1x" />
                </a>
            </span>
            <span className="fa-stack">
                <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x twitter" />
                    <i className="fab fa-twitter fa-stack-1x" />
                </a>
            </span>
        </span>
    </div>
);

export default TeamMember;
