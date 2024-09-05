import React, { Component } from "react";
import './fact.css'
class Fact extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {icon} = this.props
        const Icon = icon
        return(
            <div className="porfolio__fact">
                <Icon style={{fontSize: '5rem', color: 'brown'}} />
                <p>{this.props.text}</p>
            </div>
        )
    }
}
export default Fact