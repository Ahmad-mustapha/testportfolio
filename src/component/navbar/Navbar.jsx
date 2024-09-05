import React, { Component } from "react";
import './navbar.css'
import { CgMenuMotion } from "react-icons/cg";
import { GiCrossMark } from "react-icons/gi";

class Navbar extends Component{
    constructor(){
        super()
        this.state = {
            toggle : false
        }
    }
    render(){
        return(
            <div className="portfolio__navbar section__padding" id="home">
                {/* <div className="overlay"></div> */}
                <div className="portfolio__navbar-logo">
                    <h1 className="text-gradient">Musben</h1>
                </div>
                <ul className="portfolio__navbar-links">
                    <li><a href="#home" className="link1">Home</a></li>
                    <li><a href="#services" className="link1">Services</a></li>
                    <li><a href="#about" className="link1">About</a></li>
                    <li><a href="" className="link1">Testimonials</a></li>
                    <li><a href="#projects" className="link1">Gallery</a></li>
                    <li><a href="" className="link1">Pricing</a></li>
                    <li><a href="" className="link1">FAQ</a></li>
                    <li><a href="#gitouch">Get In Touch</a></li>
                </ul>
                <div className="portfolio__navbar-menu">
                    {!this.state.toggle
                        ? <CgMenuMotion style={{fontSize: '1.7rem', color: 'brown', cursor: 'pointer'}} onClick={() => this.setState({ toggle: true})}/> 
                        : <GiCrossMark style={{fontSize: '1.7rem', color: 'brown', cursor: 'pointer'}} onClick={() => this.setState({ toggle: false})}/>
                    }
                    {this.state.toggle &&
                        <ul className="portfolio__navbar-menu-links transition">
                            <li><a href="#home" className="link2">Home</a></li>
                            <li><a href="#services" className="link2">Services</a></li>
                            <li><a href="#about" className="link2">About</a></li>
                            <li><a href="" className="link2">Testimonials</a></li>
                            <li><a href="#projects" className="link2">Gallery</a></li>
                            <li><a href="" className="link2">Pricing</a></li>
                            <li><a href="" className="link2">FAQ</a></li>
                            <li><a href="#gitouch">Get In Touch</a></li>
                    </ul>
                    }
                </div>
            </div>
        )
    }
}
export default Navbar