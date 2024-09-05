import React, { Component } from "react";
import './footer.css'
class Footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="portfolio__footer section__padding">
                <p>Copyright &copy; 2023 Mustapha</p>
            </div>
        )
    }
}
export default Footer