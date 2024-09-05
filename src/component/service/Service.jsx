import React, { Component } from "react";
import './service.css'
class Service extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { icon } = this.props
        const Icon = icon
        return(
            <div className="portfolio__service">
                <div className="portfolio__service-image">
                    <Icon style={{fontSize: '5rem', color: 'brown'}}/>
                </div>
                <div className="portfolio__service-content">
                    <p>{this.props.stack}</p>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
export default Service