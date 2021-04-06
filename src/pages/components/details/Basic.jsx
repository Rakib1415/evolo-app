import React from 'react';
import details1 from '../../../assets/images/details-1-office-worker.svg';
import details2 from '../../../assets/images/details-2-office-team-work.svg';
import ImgContainer from './ImgContainer';
import TextContainer from './TextContainer';

const Basic = ({ basic }) => {
    console.log(basic);
    return (
        <div className="container">
            <div className="row">
                {basic ? (
                    <>
                        <div className="col-lg-6">
                            <TextContainer />
                        </div>
                        <div className="col-lg-6">
                            <ImgContainer img={details1} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-lg-6">
                            <ImgContainer img={details2} />
                        </div>
                        <div className="col-lg-6">
                            <TextContainer />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Basic;
