import React from 'react';
import '../css/Secondevent.css';
import man from "../img/man.jpg";
const Secondevent = () => {
    return (
        <div>
            

            {/* ----testimonial----- */}
            <section id='testimonial'>
                <div className='testimonial-heading'>

                    <ul className="nav">
                        <li class="nav-item ">
                            <a className="nav-link active event" aria-current="page" href="#">EVENTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">MY EVENTS</a>
                        </li>

                        <li class="nav-item">
                            <a className="nav-link" href="#">CG CAMPAIGN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CURRENT EVENTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">UPCOMING EVENTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">MORE</a>
                        </li>
                        <li>
                            {/* <button type="button" className="button">Create New Events</button> */}
                            <button type="button" className="btn-sm btn-outline-primary btn11 ">Create New Events</button>

                        </li>

                    </ul>

                </div>

                <div className='testimonial-box-container'>

                    {/* BOX1 */}
                    <div className='testimonial-box'>
                        <div className='box-top'>
                            <div className='profile'>
                                <img src={man} alt='manimg'></img>
                            </div>

                            <div className='nametext'>
                                <strong>    Role Model Interaction for students'My Code'</strong>
                            </div>
                        </div>
                        <div className='comments'>
                        <i class="bi bi-globe">Virtual (Register by Feb10)</i>
                       <div><i class="bi bi-calendar-check">15 Feb 2022 | 3:00 PM - 5:00 PM (2hrs)</i> </div> 
                            <h6>"Role models from Capgemini interact with students in Telengana schools and talk about 
                                their career journeys, challenges and accomplishments. This interaction inspires students,
                                 specifically girls, to continue their education and pursue careers (in STEM). 
                                Preferred employees who can speak Hindi/English.</h6>
                            <a href='link'>Know More!</a>
                        </div>

                    </div>
                    <div className='testimonial-box'>
                        <div className='box-top'>
                            <div className='profile'>
                                <img src={man} alt='manimg'></img>
                            </div>

                            <div className='nametext'>
                                <strong>Teaching Python programming to children!</strong>
                            </div>
                        </div>
                        <div className='comments'>
                        <i class="bi bi-globe">Virtual (Register by Feb10)</i>
                       <div><i class="bi bi-calendar-check">15 Feb 2022 | 3:00 PM - 5:00 PM (2hrs)</i> </div> 
                            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                            <a href='link'>Know More!</a>
                        </div>

                    </div>
                    <div className='testimonial-box'>
                        <div className='box-top'>
                            <div className='profile'>
                                <img src={man} alt='manimg'></img>
                            </div>

                            <div className='nametext'>
                                <strong>I&D- Mock Interviews for Disadvantaged youth</strong>
                            </div>
                        </div>
                        <div className='comments'>
                        <i class="bi bi-globe">Virtual (Register by Feb10)</i>
                       <div><i class="bi bi-calendar-check">15 Feb 2022 | 3:00 PM - 5:00 PM (2hrs)</i> </div> 
                            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                            <a href='link'>Know More!</a>
                        </div>

                    </div>
                    <div className='testimonial-box'>
                        <div className='box-top'>
                            <div className='profile'>
                                <img src={man} alt='manimg'></img>
                            </div>

                            <div className='nametext'>
                                <strong>Awareness session on Cyber security</strong>
                            </div>
                        </div>
                        <div className='comments'>
                        <i class="bi bi-globe">Virtual (Register by Feb10)</i>
                       <div><i class="bi bi-calendar-check">15 Feb 2022 | 3:00 PM - 5:00 PM (2hrs)</i> </div> 
                            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                            <a href='link'>Know More!</a>
                        </div>

                    </div>



                </div>


            </section>

            
        </div>
    );
};

export default Secondevent;
