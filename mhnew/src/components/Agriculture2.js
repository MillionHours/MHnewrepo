import React from "react";
import Navbar from './Navbar';
 import Secondevent from './Secondevent';


import '../css/Agriculture2.css';

import Agriban3 from "../img/Agriban3.jpg";



const Agriculture2 = () => {
    return (

        <div>
            <Navbar></Navbar>

            <div className='educomponentagri'>

                {/* <div className="containeragri1"> */}
                {/* <h2>"Your body hears everything your mind says"-Naomi Judd</h2>
                    <p>A man is not rightly conditioned until he is a happy, healthy, 
                        and prosperous being; and happiness, health, and prosperity are the result of a harmonious
                         adjustment of the inner with the outer of the man with his surroundings.
                    </p> */}

                {/* </div> */}
                <div className="containeragri">
                    <div className='edubox'>
                        <div className='edubox11 educommon'>
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

                    </div>
                </div>
            </div>
            <br /><br />

            <Secondevent></Secondevent>
          
            <br /><br />

        </div>




    );
}

export default Agriculture2;