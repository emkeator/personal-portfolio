import React from 'react';

const WorkProject = (props, opacity) => {
    return <div className="project">
                <a href={props.project.hostedLink} target="_blank"><h2>{props.project.title}</h2></a>
                <h3>{props.project.subtitle}</h3>
                <div>
                    <div className="projectLeft">
                        <a href={props.project.videoTour || props.project.hostedLink} target="_blank">
                            <img src={props.project.imgSrc} alt={props.project.altText}/>
                            {props.project.videoTour &&
                            <div className="videoTriangle" style={{position: "absolute", top:"0", left: "0"}}>
                                <svg width="275px" height="184px" style={{position: "absolute", top:"0", left: "0"}}>
                                    {/* <rect width="275px" height="184px" className="svgRect" style={{fill:"rgba(255,255,255,0.5)"}}/> */}
                                    <polygon points="115,72 115,112 155,92" style={{fill:"rgba(255,255,255,0.9)"}} />
                                </svg>
                            </div>}
                        </a>
                        
                    </div>
                    <div className="projectRight">
                        <ul className="info">
                            { props.project.listPoints.map(e => <li>{e}</li>) }                                  
                        </ul>
                    </div>
                </div>
           </div>
}

export default WorkProject