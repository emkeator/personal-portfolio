import React, {Component} from 'react';
import $ from 'jquery';
import loopsLeft from './../../images/loopsEduExLeft.svg';
import loopsRight from './../../images/loopsEduExRight.svg';
import skylines from './../../images/skylines.svg';
import superbaby from './../../images/superbaby.svg';
import dLCert from './../../files/deep-learning-certificate.pdf';
import fendNano from './../../files/frontend-nanodegree.pdf';

class EduExperience extends Component {

    render() {
        return(
            <main id="EduExperience">
                <header onClick={() => {
                        $('#EduExperience section').toggle(400);
                        $('#Work section').hide(400);
                        $('#About section').hide(400);                        
                    }}>
                    <img src={loopsLeft}/>
                    <h1>My Education & Experience</h1>
                    <img src={loopsRight}/>
                </header>
                <section>
                    <img src={skylines} id="skylines" alt="skylines"/> 
                    <div className="flexContainer">
                        <div className="eduEx" id="devmtn">
                            <div className="headers">
                                <h2>DevMountain</h2>
                                <h2 className="secondH2">Provo, UT</h2>
                                <h3>Mentor</h3>
                                <h3 className="second">CURRENT</h3>                                
                            </div>
                            <ul>
                                <li>Taught students and collaborated on projects for DevMountain.</li>
                                <li>Emphasis on Full-Stack Development with React, Sass, Node, Express, Massive, SQL.</li>
                                <li>Assisted on admin projects.</li>
                            </ul>
                        </div>
                        <div className="eduEx" id="provo">
                            <div className="headers">
                                <h2>DevMountain</h2>
                                <h2 className="secondH2">Provo, UT</h2>
                                <h3>Student Developer, Cohort 26</h3>
                                <h3 className="second">JULY 2017 - OCT 2017</h3>                                
                            </div>
                            <ul>
                                <li>Emphasis on Full-Stack Development with React, Sass, Node, Express, Massive, SQL.</li>
                                <li>Developed web apps regularly, while improving skills with in-class demos and projects.</li>
                                <li>Won "Best Overall" Personal Project in cohort.</li>                                                               
                            </ul>
                        </div>
                        <div className="eduEx" id="online">
                            <div className="headers">
                                <h2>Udacity</h2>
                                <h2 className="secondH2">Online</h2>
                                <h3>Student Developer/Programmer</h3>
                                <h3 className="second">NOV 2016 - JULY 2017</h3>                                
                            </div>
                            <ul>
                                <li>Enrolled in <a href={fendNano} target="_blank">Front-End Web Developer Nanodegree</a> & <a href={dLCert} target="_blank">Deep Learning Foundation Nanodegree</a>.</li>                                
                                <li>Earned nanodegree in Front-End Web Dev & certificate in Deep Learning Foundations through online coursework with regular projects.</li>                                                             
                            </ul>
                        </div>
                        <div className="eduEx" id="dc">
                            <div className="headers">
                                <h2>National Institutes of Health</h2>
                                <h2 className="secondH2">Bethesda, MD</h2>
                                <h3>Student Developer/Programmer</h3>
                                <h3 className="second">JUNE 2016 - JUNE 2017</h3>                                
                            </div>
                            <ul>
                                <li>Received prestigious post-bac Intramural Training Research Award, for work in genetic/genomic engineering in the neuroscience lab of Dr. Lee Eiden.</li>                                
                                <li>Produced and analyzed data, presenting at two NIH conferences.</li>                                                             
                            </ul>
                        </div>
                        <div className="eduEx" id="davidson">
                            <div className="headers">
                                <h2>Davidson College</h2>
                                <h2 className="secondH2">Davidson, NC</h2>
                                <h3>B.S., Biology</h3>
                                <h3 className="second">AUG 2012 - MAY 2016</h3>                                
                            </div>
                            <ul>
                                <li>GPA 3.96 (Major GPA 3.98).</li>                                
                                <li>John I. Smith Honor Scholarship, National Merit Scholarship & Alumni Association Award.</li>
                                <li>Relevant coursework: Data Structures (Java, Algorithms & Object-Oriented Programming), Bioinformatics (Python), Statistics.</li>                                                                                        
                            </ul>
                        </div>
                        <div className="eduEx" id="scotland">
                            <div className="headers">
                                <h2>University of St Andrew's</h2>
                                <h2 className="secondH2">Fife, Scotland</h2>
                                <h3>Study Abroad Student</h3>
                                <h3 className="second">AUG 2014 - DEC 2014</h3>                                
                            </div>
                            <ul>
                                <li>Studied Art History.</li>                                
                                <li>Renewed interest in design.</li>                                                                                        
                            </ul>
                        </div>
                        <div className="eduEx" id="jax">
                            <div className="headers">
                                <h2>The Jackson Laboratory</h2>
                                <h2 className="secondH2">Bar Harbor, ME</h2>
                                <h3>Summer Student</h3>
                                <h3 className="second">SUMMER 2014, 2015</h3>                                
                            </div>
                            <ul>
                                <li>Genetic/genomic engineering and data analyses.</li>
                                <li>First began using programming for data work (R).</li>                                                                                              
                                <li>Presented work at symposium in front of lab CEO.</li>                                                                                        
                            </ul>
                        </div>
                        <div className="eduEx" id="fernwood">
                            <div className="headers">
                                <h2>Camp Fernwood</h2>
                                <h2 className="secondH2">Bar Harbor, ME</h2>
                                <h3>Counselor</h3>
                                <h3 className="second">SUMMER 2013</h3>                                
                            </div>
                            <ul>
                                <li>Taught rock climbing & directed ballet program.</li>
                                <li>Live-in bunk "mom" for group of 11 eight-year-olds.</li>                                                                                        
                            </ul>
                        </div>
                        <div className="eduEx" id="bolles">
                            <div className="headers">
                                <h2>The Bolles School</h2>
                                <h2 className="secondH2">Jacksonville, FL</h2>
                                <h3>Student</h3>
                                <h3 className="second">AUG 2008 - MAY 2012</h3>                                
                            </div>
                            <ul>
                                <li>Salutatorian of Class of 2012.</li>
                                <li>Danced the role of the Sugarplum Fairy in "The Nutcracker".</li>                                                                                        
                            </ul>
                        </div>
                        <div className="eduEx" id="born">
                            <div className="headers">
                                <h2 className="secondH2">Ponte Vedra</h2>                                
                                <h2 className="secondH2">Florida</h2>                                
                            </div>
                            <div><img src={superbaby} alt="emily keator web developer as a child"/></div>
                            <h1>START!</h1>
                        </div>
                        
                    </div>
                </section>
            </main>
        );
    }
}

export default EduExperience;