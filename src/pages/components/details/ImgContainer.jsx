import React from 'react';

const ImgContainer = ({ img }) => (
    <div className="image-container">
        <img className="img-fluid" src={img} alt="alternative" />
    </div>
);

export default ImgContainer;
