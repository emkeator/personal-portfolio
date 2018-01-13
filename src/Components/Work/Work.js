import React, {Component} from 'react';
import $ from 'jquery';
import loopsLeft from './../../images/loopsWorkLeft.svg';
import loopsRight from './../../images/loopsWorkRight.svg';
import balletslc from './../../images/balletslc.png';
import lonelymtn from './../../images/lonelymtn.png';
import utParks from './../../images/utnationalparks.png';
import bc from './../../images/black_canary.png';
import travel from './../../images/on_the_fly.png';
import sothebys from './../../images/sothebys.png';
import WorkProject from './WorkProject/WorkProject';

class Work extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    hostedLink: "https://travel-showcase-app.herokuapp.com/#/login",
                    title: "On The Fly Travel App",
                    subtitle: "Personally Developed Full-Stack Responsive Web App",
                    videoTour: "https://youtu.be/eMnqAk2lCHM",
                    imgSrc: travel,
                    altText: "emily keator travel app project",
                    pTopText: "Travel app that allows user to plan & save trips, and \"chat\" with an agent.",
                    listPoints: ["FRONT-END: React, GSAP, Sass.", "BACK-END: Node.js, Massive.js, Postgres SQL, Express.js., Socket.io.", "Uses: Amazon S3, airport code API.", "Test login: testingtravelapp@gmail.com; testingTravel."],
                    pBottomText: "Video tour: click image at left.",
                },
                {
                    hostedLink: "https://blackcanarysafetyapp.herokuapp.com/#/",
                    title: "Black Canary Safety App",
                    subtitle: "Group Developed Full-Stack Responsive Web App",
                    videoTour: "https://youtu.be/cw8VR4JNrwk",
                    imgSrc: bc,
                    altText: "emily keator black canary safety app dev mountain group project",
                    pTopText: "Geolocation web app for sharing your location with friends in a variety of situations.",
                    listPoints: ["FRONT-END: React, Geolocation, GSAP, Sass, jQuery.", "BACK-END: Node.js, Massive.js, Postgres SQL, Express.js., Socket.io.", "Uses: Google Maps API."],
                    pBottomText: "Video tour: click image at left.",
                },
                {
                    hostedLink: "http://balletslc.com/#/",
                    title: "Ballet SLC",
                    subtitle: "Personally Developed Full-Stack Responsive Web App",
                    videoTour: "https://youtu.be/K9R78UiJn-c",
                    imgSrc: balletslc,
                    altText: "emily keator ballet salt lake city project",
                    pTopText: "Full-stack, mobile-responsive web app for a fake ballet company.",
                    listPoints: ["FRONT-END: React, GSAP, Sass, jQuery.", "BACK-END: Node.js, Massive.js, Postgres SQL, Express.js.", "Uses: Stripe API."],
                    pBottomText: "Video tour: click image at left.",
                },
                {
                    hostedLink: "https://vue-sothebys-clone.herokuapp.com/#/",
                    title: "Summit Sotheby's Realty Clone",
                    subtitle: "Redesigned Vue.js Front-End Web App",
                    videoTour: "",
                    imgSrc: sothebys,
                    altText: "emily keator vue.js summit sotheby's project",
                    pTopText: "Front-end Vue.js redesigned clone of Summit Sotheby's Realty Website.",
                    listPoints: ["FRONT-END: Vue.js, CSS, HTML5.", "BACK-END: Node.js, Express.js."],
                    pBottomText: "Uses a simple backend node.js server.",
                },
                {
                    hostedLink: "https://emkeator.github.io/lonely-mountain-winery-project-site/#/",
                    title: "Lonely Mountain Winery",
                    subtitle: "Personally Developed Web App",
                    videoTour: "https://youtu.be/EGUSxEn0syA",
                    imgSrc: lonelymtn,
                    altText: "emily keator lonely mountain winery project",
                    pTopText: "Front-end, responsive web app. DevMountain personal no-server project.",
                    listPoints: ["FRONT-END: React, Sass, jQuery.", "Uses: Google Maps API."],
                    pBottomText: "Video tour: click image at left.",
                },
                {
                    hostedLink: "https://emkeator.github.io/frontend-nanodegree-maps-project/",
                    title: "Utah Parks Map",
                    subtitle: "Personally Developed Responsive Web App",
                    videoTour: "https://youtu.be/fpQ9qUgUO1E",
                    imgSrc: utParks,
                    altText: "emily keator utah national parks project",
                    pTopText: "Front-end, responsive web app. Udacity Front-End Nanodegree project.",
                    listPoints: ["FRONT-END: HTML, CSS, JS, Knockout.js.", "Uses: Google Maps API, Weather Underground API."],
                    pBottomText: "Video tour: click image at left.",
                }
            ]
        }
    }
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
                        {this.state.projects.map(e => {
                            {/* console.log(e); */}
                            return <WorkProject project={e}/>
                        })}
                    </div>
                </section>
            </main>
        );
    }
}

export default Work;