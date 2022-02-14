import React from "react";
import Navbar from './Navbar';
import Secondevent from './Secondevent';
// import TestimonialEdu from './TestimonialEdu';

import '../css/Education2style.css';

import eduban from "../img/eduban2.jpg";
//  import Myeventcard from "./Myeventcard";


const Education2 = () => {
    return (

        <div>
            <Navbar></Navbar>


            <div className='educomponentedu'>

                <div className="container1">
                    <h2>Education, everyone wants it !</h2>
                </div>
                <div className="container">
                    <div className='edubox'>
                    <div className='edubox12 educommonn'>
                        <div className='edubox1item1' ><h4>170 Hr</h4>
                            <p>Total Hours</p>
                        </div>
                        <div className='edubox1item2'><h4>70</h4>
                            <p>Total Campaign</p>
                        </div>
                        <div className='edubox1item3'><h4>70</h4>
                            <p>Total Member</p>
                        </div>
                    </div>
                    {/* <div className='edubox2 educommon'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>

                       
                        <div className='buttons'> <button className="btn btn-outline-light" type="button">Create New Event</button>

                        </div>
                    </div> */}
                    {/* </div> */}

                </div>
                </div>


            </div>
            <Secondevent></Secondevent>
            {/* <TestimonialEdu></TestimonialEdu> */}
        

        </div>







    );
}

export default Education2;