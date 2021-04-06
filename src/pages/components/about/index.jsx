import React from 'react';
import member1 from '../../../assets/images/team-member-1.svg';
import member2 from '../../../assets/images/team-member-2.svg';
import member3 from '../../../assets/images/team-member-3.svg';
import member4 from '../../../assets/images/team-member-4.svg';
import TeamMember from './TeamMember';

const About = () => (
    <div id="about" className="basic-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>About The Team</h2>
                    <p className="p-heading p-large">
                        Meat our team of specialized marketers and business developers which will
                        help you research new products and launch them in new emerging markets
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TeamMember img={member1} />
                    <TeamMember img={member2} />
                    <TeamMember img={member3} />
                    <TeamMember img={member4} />
                </div>
            </div>
        </div>
    </div>
);

export default About;
