import React, {Component} from 'react';
import $ from 'jquery';
import loopsLeft from './../../images/loopsAboutLeft.svg';
import loopsRight from './../../images/loopsAboutRight.svg';
import skills from './../../images/skills.svg';
import me from './../../images/me.png';

class About extends Component {

    render() {
        return(
            <main id="About">
                <header onClick={() => {
                        $('#About section').toggle(400);
                        $('#Work section').hide(400);
                        $('#EduExperience section').hide(400);                        
                    }}>
                    <img src={loopsLeft}/>
                    <h1>My Skills & Interests</h1>
                    <img src={loopsRight}/>
                </header>
                <section>
                    <div className="flexContainer">
                        <div className="project">
                            <h2>Skills</h2>
                            <div className="skills">
                                <img src={skills} alt="javascript html html5 css css3 react node.js express.js sass scss git postgres postgres-sql jquery j-query knockout.js photoshop java python tensorflow massive.js auth0 auth-zero jupyter notebook"/>
                            </div>
                        </div>
                        <div className="project">
                            <h2>Interests</h2>
                            <ul>
                                <li>Programming: <span>in addition to web development, I am fascinated by and have studied some Deep Learning/AI.</span></li>
                                <li>Design: <span>I love spending time making my projects look beautiful.</span></li>
                                <li>Science & Tech: <span>now a web developer, I once worked in genetics/genomics research.</span></li>
                                <li>Hiking & Skiing: <span>I moved West for a lifetime of adventures.</span></li>
                                <li>Cooking & Baking: <span>especially chocolate chip cookies.</span></li> 
                                <li>Reading: <span>when in doubt, go to the library.</span></li>                                                           
                            </ul>
                        </div>
                        <div className="project">
                            <h2>Me</h2>
                            <div><img id="me" src={me} alt="emily keator web developer"/></div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default About;