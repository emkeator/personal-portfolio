import React, {Component} from 'react';
import $ from 'jquery';
import loopsLeft from './../../images/loopsWorkLeft.svg';
import loopsRight from './../../images/loopsWorkRight.svg';
import balletslc from './../../images/balletslc.png';
import lonelymtn from './../../images/lonelymtn.png';
import utParks from './../../images/utnationalparks.png';

class Work extends Component {

    render() {
        return(
            <main id="Work">
                <header onClick={() => {
                        $('#Work section').toggle(400);
                        $('#EduExperience section').hide(400);
                        $('#About section').hide(400);                        
                    }}>
                    <img src={loopsLeft}/> 
                    <h1>My Work</h1>
                    <img src={loopsRight}/>                     
                </header>
                <section>
                    <div className="flexContainer">
                        <div className="project">
                            <a href="http://138.68.236.159:3005/#/" target="_blank"><h2>Ballet SLC</h2></a>
                            <h3>Personally Developed Full-Stack Responsive Web App</h3>
                            <div>
                                <a href="https://youtu.be/K9R78UiJn-c" target="_blank">
                                    <img src={balletslc} alt="emily keator project"/>
                                </a>
                                <p>Full-stack responsive web app. DevMountain personal project.
                                    <ul>
                                        <li>FRONT-END: React, GSAP, Sass, jQuery.</li>
                                        <li>BACK-END: Node.js, Massive.js, Postgres SQL (database hosted in Heroku), Express.js.</li>                                        
                                        <li>Uses: Stripe API.</li>                                    
                                    </ul>
                                    Video tour: click image at left.
                                </p>
                            </div>
                        </div>
                        <div className="project">
                            <a href="https://emkeator.github.io/lonely-mountain-winery-project-site/#/" target="_blank"><h2>Lonely Mountain Winery</h2></a>
                            <h3>Personally Developed Web App</h3>
                            <div>
                                <a href="https://youtu.be/EGUSxEn0syA" target="_blank">
                                    <img src={lonelymtn} alt="emily keator project"/>
                                </a>
                                <p>Front-end, responsive web app. DevMountain personal no-server project.
                                    <ul>
                                        <li>FRONT-END: React, Sass, jQuery.</li>
                                        <li>Uses: Google Maps API.</li>                                        
                                    </ul>
                                    Video tour: click image at left.
                                </p>
                            </div>
                        </div>
                        <div className="project">
                            <a href="https://emkeator.github.io/frontend-nanodegree-maps-project/" target="_blank"><h2>Utah Parks Map</h2></a>
                            <h3>Personally Developed Responsive Web App</h3>
                            <div>
                                <a href="https://youtu.be/fpQ9qUgUO1E" target="_blank">
                                    <img src={utParks} alt="emily keator project"/>
                                </a>
                                <p>Front-end, responsive web app. Udacity Front-End Nanodegree project.
                                    <ul>
                                        <li>FRONT-END: HTML, CSS, JS, Knockout.js.</li>
                                        <li>Uses: Google Maps API, Weather Underground API.</li>                                        
                                    </ul>
                                    Video tour: click image at left.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Work;