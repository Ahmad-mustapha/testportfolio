import React, { Component } from "react";
import Fact from "../../component/fact/Fact";
import { IoDiamond } from "react-icons/io5";
import { BiMedal } from "react-icons/bi";
import { LuHeart } from "react-icons/lu";
import { BiAnchor } from "react-icons/bi";
import './facts.css'

class Facts extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="portfolio__facts section__padding">
                <p>Fun facts about my work</p>
                <div className="portfolio__facts-fact">
                    <Fact icon={IoDiamond} text='Project Completed'/>
                    <Fact icon={BiMedal} text='Design Awards'/>
                    <Fact icon={LuHeart} text='Happy Clients'/>
                    <Fact icon={BiAnchor} text='Line Of Codes'/>
                </div>
            </div>
        )
    }
}
export default Facts