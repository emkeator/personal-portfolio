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
                    listPoints: ["Travel app that allows user to plan & save trips, and \"chat\" with an agent.", "FRONT-END: React, GSAP, Sass.", "BACK-END: Node.js, Massive.js, Postgres SQL, Express.js., Socket.io.", "Uses: Amazon S3, airport code API.", "Login: testingtravelapp@gmail.com; testingTravel."],
                    pBottomText: "",
                },
                {
                    hostedLink: "https://blackcanarysafetyapp.herokuapp.com/#/",
                    title: "Black Canary Safety App",
                    subtitle: "Group Developed Full-Stack Responsive Web App",
                    videoTour: "https://youtu.be/cw8VR4JNrwk",
                    imgSrc: bc,
                    altText: "emily keator black canary safety app dev mountain group project",
                    pTopText: "Geolocation web app for sharing your location with friends in a variety of situations.",
                    listPoints: ["Geolocation web app for sharing your location with friends in a variety of situations.", "FRONT-END: React, Geolocation, GSAP, Sass, jQuery.", "BACK-END: Node.js, Massive.js, Postgres SQL, Express.js., Socket.io.", "Uses: Google Maps API."],
                    pBottomText: "",
                },
                {
                    hostedLink: "https://slc-ballet.herokuapp.com/#/",
                    title: "Ballet SLC",
                    subtitle: "Personally Developed Full-Stack Responsive Web App",
                    videoTour: "https://youtu.be/K9R78UiJn-c",
                    imgSrc: balletslc,
                    altText: "emily keator ballet salt lake city project",
                    pTopText: "Full-stack, mobile-responsive web app for a fake ballet company.",
                    listPoints: ["Full-stack, mobile-responsive web app for a fake ballet company.", "FRONT-END: React, GSAP, Sass, jQuery.", "BACK-END: Node.js, Massive.js, Postgres SQL, Express.js.", "Uses: Stripe API.", "Notable features: 3D-interactive ticket selector."],
                    pBottomText: "Notable features: 3D-interactive ticket selector.",
                },
                {
                    hostedLink: "https://vue-sothebys-clone.herokuapp.com/#/",
                    title: "Summit Sotheby's Realty Clone",
                    subtitle: "Redesigned Vue.js Front-End Web App",
                    videoTour: "",
                    imgSrc: sothebys,
                    altText: "emily keator vue.js summit sotheby's project",
                    pTopText: "Front-end Vue.js redesigned clone of Summit Sotheby's Realty Website.",
                    listPoints: ["Front-end Vue.js redesigned clone of Summit Sotheby's Realty Website." ,"FRONT-END: Vue.js, CSS, HTML5.", "BACK-END: Node.js, Express.js.", "Uses a simple backend node.js server; intend to fill out further functionality in 2018."],
                    pBottomText: "Uses a simple backend node.js server; intend to fill out further functionality in 2018.",
                },
                {
                    hostedLink: "https://emkeator.github.io/lonely-mountain-winery-project-site/#/",
                    title: "Lonely Mountain Winery",
                    subtitle: "Personally Developed Web App",
                    videoTour: "https://youtu.be/EGUSxEn0syA",
                    imgSrc: lonelymtn,
                    altText: "emily keator lonely mountain winery project",
                    pTopText: "Front-end, responsive web app. DevMountain personal no-server project.",
                    listPoints: ["Front-end, responsive web app. DevMountain personal no-server project.", "FRONT-END: React, Sass, jQuery.", "Uses: Google Maps API."],
                    pBottomText: "",
                },
                {
                    hostedLink: "https://emkeator.github.io/frontend-nanodegree-maps-project/",
                    title: "Utah Parks Map",
                    subtitle: "Personally Developed Responsive Web App",
                    videoTour: "https://youtu.be/fpQ9qUgUO1E",
                    imgSrc: utParks,
                    altText: "emily keator utah national parks project",
                    pTopText: "Front-end, responsive web app. Udacity Front-End Nanodegree project.",
                    listPoints: ["Front-end, responsive web app. Udacity Front-End Nanodegree project.", "FRONT-END: HTML, CSS, JS, Knockout.js.", "Uses: Google Maps API, Weather Underground API."],
                    pBottomText: "",
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