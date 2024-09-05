import React, { Component } from "react";
import './gitouch.css'
class Gitouch extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id="gitouch" className="portfolio__gittouch section__padding">
                <div className="portfolio__gittouch-heading">
                    <p>Get In touch</p>
                </div>
                <form action="" className="portfolio__gittouch-form">
                    <div className="detail">
                        <input type="text" placeholder="Full Name:"/>
                    </div>
                    <div className="detail">
                        <input type="email" placeholder="Email Address:"/>
                    </div>
                    <div className="detail">
                        <input type="number" placeholder="Phone Number:"/>
                    </div>
                    <div className="detail">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your message..."></textarea>
                    </div>
                </form>
            </div>
        )
    }
}
export default Gitouch