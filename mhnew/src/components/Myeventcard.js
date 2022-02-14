
import React from 'react';
import { Container,Button } from 'react-bootstrap';
import '../css/Myeventcard.css'
import man from '../img/man.jpg'

export const Myeventcard = () => {
    return (
    <div className='background1'>
        <Container >
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">EVENTS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">MY EVENTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CG CAMAPIGN</a>
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
                        </ul>                        
                    </div>
                </div>
            </nav>
        </Container>
        <main className='card'>

<article>

    <img src={man} alt='summa'></img>

    <div className='write'>

        <h5>Create stories related to online !</h5>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.

            Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat.</p>

        <button>Learn More</button>

    </div>



</article>

<article>

    <img src={man} alt='summa'></img>

    <div className='write'>

        <h5>Create stories related to online !</h5>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.

            Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat.</p>

        <button>Learn More</button>

    </div> 
    </article>

<article className='page'>

    <img src={man} alt='summa'></img>

    <div className='write'>

        <h5>Create stories related to online !</h5>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.

            Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat.</p>

        <button>Learn More</button>

    </div>



</article></main>

    </div>
    );
    

};
export default Myeventcard;