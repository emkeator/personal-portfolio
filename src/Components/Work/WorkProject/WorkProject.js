import React from 'react';


// {
//                     hostedLink: "https://emkeator.github.io/frontend-nanodegree-maps-project/",
//                     title: "Utah Parks Map",
//                     subtitle: "Personally Developed Responsive Web App",
//                     videoTour: "https://youtu.be/fpQ9qUgUO1E",
//                     imgSrc: utParks,
//                     altText: "emily keator utah national parks project",
//                     pTopText: "Front-end, responsive web app. Udacity Front-End Nanodegree project.",
//                     listPoints: ["FRONT-END: HTML, CSS, JS, Knockout.js.", "Uses: Google Maps API, Weather Underground API."],
//                     pBottomText: "Video tour: click image at left.",
//                 }
const WorkProject = (props) => {
    return <div className="project">
                <a href={props.project.hostedLink} target="_blank"><h2>{props.project.title}</h2></a>
                <h3>{props.project.subtitle}</h3>
                <div>
                    <a href={props.project.videoTour || props.project.hostedLink} target="_blank">
                        <img src={props.project.imgSrc} alt={props.project.altText}/>
                    </a>
                    <p>{props.project.pTopText}
                        <ul>
                            { props.project.listPoints.map(e => <li>{e}</li>) }                                  
                        </ul>
                        {props.project.pBottomText}
                    </p>
                </div>
           </div>
}

export default WorkProject
{/* <div className="project">
                            <a href="http://138.68.236.159:3005/#/" target="_blank"><h2>Ballet SLC</h2></a>
                            <h3>Personally Developed Full-Stack Responsive Web App</h3>
                            <div>
                                <a href="https://youtu.be/K9R78UiJn-c" target="_blank">
                                    <img src={balletslc} alt="emily keator project"/>
                                </a>
                                <p>Full-stack, mobile-responsive web app for a fake ballet company.
                                    <ul>
                                        <li>FRONT-END: React, GSAP, Sass, jQuery.</li>
                                        <li>BACK-END: Node.js, Massive.js, Postgres SQL, Express.js.</li>                                        
                                        <li>Uses: Stripe API.</li>                                    
                                    </ul>
                                    Video tour: click image at left.
                                </p>
                            </div>
                        </div> */}
                        {/* <div className="project">
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
                        </div> */}
                        {/* <div className="project">
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
                        </div> */}