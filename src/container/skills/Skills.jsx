import React, { Component } from "react";
import './skills.css'
class Skills extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="portfolio__skills section__padding">
                <div className="portfolio__skillsAndEdu">
                    <div className="portfolio__skillsAndEdu-heading">
                        <p>Skills And Education</p>
                    </div>
                    <p className="portfolio__skillsAndEdu-student">
                        A Telecommunication student at  University Of Ilorin
                    </p>
                    <ul className="portfolio__skillsAndEdu-skills">
                        <li>Well Skilled In JS</li>
                        <li>Boostrap</li>
                        <li>Tailwind CSS</li>
                    </ul>
                    <a href="#projects" className="discover">Discover my work</a>
                </div>
                <div className="portfolio__skills-rate">
                    <div className="portfolio__skills-rate-skill">
                        <p>HTML/CSS</p>
                        <div className="portfolio__skills-rate-skillFull">
                            <div className="portfolio__skills-rate-skillRate" style={{width: '90%'}}>90%</div>
                        </div>
                    </div>
                    <div className="portfolio__skills-rate-skill">
                        <p>Javascript</p>
                        <div className="portfolio__skills-rate-skillFull">
                            <div className="portfolio__skills-rate-skillRate" style={{width: '75%'}}>75%</div>
                        </div>
                    </div>
                    <div className="portfolio__skills-rate-skill">
                        <p>Tailwind</p>
                        <div className="portfolio__skills-rate-skillFull">
                            <div className="portfolio__skills-rate-skillRate" style={{width: '85%'}}>85%</div>
                        </div>
                    </div>
                    <div className="portfolio__skills-rate-skill">
                        <p>Bootstrap</p>
                        <div className="portfolio__skills-rate-skillFull">
                            <div className="portfolio__skills-rate-skillRate" style={{width: '90%'}}>90%</div>
                        </div>
                    </div>
                    <div className="portfolio__skills-rate-skill">
                        <p>React js</p>
                        <div className="portfolio__skills-rate-skillFull">
                            <div className="portfolio__skills-rate-skillRate" style={{width: '75%'}}>75%</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skills