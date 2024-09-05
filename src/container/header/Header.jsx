import React, { Component } from 'react'
import { Navbar } from '../../component/import'
import './header.css'
class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='portfolio__header' id='home'>
                <Navbar />
                <div className="portfolio__header-contents">
                    <div className="portfolio__header-contents-name">
                        <h1>Hi. <span>I'm Mustapha,</span> A passionate frontend engineer.</h1>
                    </div>
                    <p>Open to all related works, volunteer and collaboration</p>
                </div>
            </div>
        )
    }
}
export default Header
