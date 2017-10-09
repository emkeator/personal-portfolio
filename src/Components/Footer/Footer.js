import React, {Component} from 'react';
import $ from 'jquery';
import github from './../../images/github.svg';
import linkedin from './../../images/linkedin.svg';
import resume from './../../images/resume.svg';
import email from './../../images/email.svg';
import instagram from './../../images/instagram.svg';
import resumeFile from './../../files/EmKeatorTechRes_Oct9.pdf';


class Footer extends Component {

    render() {
        return(
            <main id="Footer">
                <a target="_blank" href="https://github.com/emkeator"><img src={github} alt="emily keator github"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/emkeator/"><img src={linkedin} alt="emily keator linkedin"/></a>
                <a target="_blank" href={resumeFile} ><img src={resume} alt="emily keator resume"/></a>
                <a target="_blank" href="mailto:emkeator@gmail.com"><img src={email} alt="emily keator email"/></a>              
                <a target="_blank" href="https://www.instagram.com/emkeator/"><img src={instagram} alt="emily keator instagram"/></a>          
            </main>
        );
    }
}

export default Footer;