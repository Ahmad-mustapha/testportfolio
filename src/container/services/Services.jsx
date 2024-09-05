import React, { Component } from "react";
import './services.css'
import { Service } from "../../component/import";
import { LiaMedalSolid } from "react-icons/lia";
import { GiUmbrella } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
class Services extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id="services" className="portfolio__services">
                <div className="portfolio__services-heading">
                    <h1>What I do best</h1>
                </div>
                <div className="portfolio__service-container">
                    <Service icon={LiaMedalSolid} stack='Software Development' text='Get high scalable software to your satisfaction'/>
                    <Service icon={VscTools} stack='Web Development' text='A nice user experience websites.'/>
                    <Service icon={GiUmbrella} stack='Website Design' text='Get awesome and attractive web pages.'/>
                </div>
            </div>
        )
    }
}
export default Services