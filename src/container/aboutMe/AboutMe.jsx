import React, { Component } from "react";
import myImage from '../../assets/myPic.jpg'
import './aboutMe.css'
import { FaCheck } from "react-icons/fa6";
class AboutMe extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="portfolio__aboutMe section__padding">
                <div className="portfolio__aboutMe-image">
                    <a href="" target="_blank"><img src={myImage} alt="" style={{borderRadius: '50%'}}/></a>
                </div>
                <div className="portfolio__aboutMe-contents">
                    <div className="portfolio__aboutMe-content-header">
                        <p>A little about me</p>
                    </div>
                    <div className="portfolio__aboutMe-content-text">
                        <p>I am a passion-driven developer who help designers, small agencies and businesses bring their ideas to life. 
                        I turn your requirements into amazing websites - on time and on budget.
                        I've got about 1 years of experience with javascript and I've volunteered in many projects that needs outright attention to
                        </p>
                    </div>
                    <ul className="portfolio__aboutMe-content-attentionTo">
                        <li><FaCheck icon="fa-solid fa-check" style={{color: 'brown', fontSize: '1.1rem', fontWeight: '800'}}/>   Determined.</li>
                        <li><FaCheck icon="fa-solid fa-check" style={{color: 'brown', fontSize: '1.1rem', fontWeight: '800'}}/>   Focused</li>
                        <li><FaCheck icon="fa-solid fa-check" style={{color: 'brown', fontSize: '1.1rem', fontWeight: '800'}}/>   Time-bound</li>
                    </ul>
                    <div className="portfolio__aboutMe-contents-details">
                        <div className="col col1">
                            <p>Location <span className="line"></span> <span>Lagos State, Nigeria</span></p>
                            <p>Freelance <span className="line"></span> <span>Avalaible</span></p>
                            <p>Phone <span className="line"></span> <span>+2347048049182</span></p>
                        </div>
                        <div className="col col2">
                            <p>Email <span className="line"></span> <span>ahmadishola12@gmail.com</span></p>
                            <p>LinkedIn <span className="line"></span> <span></span></p>
                            {/* <p>Location <span>Lagos State, Nigeria</span></p> */}
                        </div>
                    </div>
                    <a href="#" className="portfolio__aboutMe-downloadResume">Download Resume</a>
                </div>
            </div>
        )
    }
}
export default AboutMe