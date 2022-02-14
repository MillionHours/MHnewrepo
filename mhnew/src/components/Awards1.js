import React from 'react'
import '../css/Awardstyle.css'
import 'react-multi-carousel/lib/styles.css';
import Person from '../img/Person.jpg'
import Tushar from '../img/Tushar.png'
import subham from '../img/subham.jpg'
// import { AiFillTrophy } from 'react-icons/fa'
// import { ArrowRight } from 'react-bootstrap-icons';
import { BsFillTrophyFill } from "react-icons/bs"


const Awards1 = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Awards & Rewards</h1>
            <div class="wrapperG">
                <div className='titleG'><h2 style={{paddingRight:90}} >Sustainablity</h2></div><br />
                <br></br>
                <br></br>
                <br></br>
                <div class="teamG">
                    <div class="team_memberG">
                        <div class="teamimgG">
                            <img src={subham} alt="img"></img>
                        </div>
                        <div className='winner'><p><BsFillTrophyFill/></p><h5>1st Winner</h5></div>
                        <h3>Subham Agarwal</h3>
                        <div className='bbox'>
                            <h6>Campaign name :- </h6>
                            <h6>Total Hours : 800 Hrs Type: Project</h6>
                        </div>
                       
                        <p>"We believe that society will be able to employ earthquake prediction as it develops in the future to save lives.
                             we are predicting earthquake before a week so that society will able to take actions that will provide some measure of protection from this natural disaster."
</p>
                    </div>
                    <div class="team_memberG">
                        <div class="teamimgG">
                            <img src={Person} alt="img"></img>
                        </div>
                        <div className='winner'><p><BsFillTrophyFill/></p><h5>1st Winner</h5></div>
                        <h3>Sarita</h3>
                        <div className='bbox'>
                            <h6>Campaign name :- </h6>
                            <h6>Total Hours : 400Hrs Type : NGO</h6>
                        </div>
                       
                        <p>"I have given free tuitions at my place to the needy people during my collage days for more than 3 years,
                         In that way I use to feel happy while helping the needed children's.
                             If Time will permit than in future I would like to contribute to some NGO's"
. </p>
                    </div>
                    <div class="team_memberG">
                        <div class="teamimgG">
                            <img src={Tushar} alt="img"></img>
                        </div>
                        <div className='winner'><p><BsFillTrophyFill/></p><h5>1st Winner</h5></div>
                        <h3>Tushar Suresh Patil</h3>
                        <div className='bbox'>
                            <h6>Campaign name :- </h6>
                            <h6>Total Hours : 400Hrs  Type : Social</h6>
                        </div>
                      
                        <p>"I have worked for NSS in my college for 2 years and in that time we constantly had various activities for social reformation and vigilance.
                             During this time we did tree plantation a lot of times and we have done some major work in this domain"
 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Awards1

