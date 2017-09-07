import React, {Component} from 'react';
import $ from 'jquery';
import loops from './../../images/loops3.svg';
import skills from './../../images/skills.svg';

class About extends Component {

    render() {
        return(
            <main id="About">
                <header onClick={() => {
                        $('#About section').toggle(400);
                        $('#Work section').hide(400);
                        $('#EduExperience section').hide(400);                        
                    }}>
                    <img src={loops}/>
                    <h1>My Skills & Interests</h1>
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
                                <li>Programming: <span>in addition to web development, I enjoyed learning about Deep Learning/AI</span></li>
                                <li>Design: <span>I love spending time to make my work look good!</span></li>
                                <li>Science & Technology: <span>now a web developer, I used to work in biological research for genomics</span></li>
                                <li>Hiking & Skiing: <span>I moved to Utah for good reason!</span></li>
                                <li>Cooking & Baking: <span>especially chocolate chip cookies.</span></li>                            
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default About;