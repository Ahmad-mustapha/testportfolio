import React, { Component } from "react";
import './projects.css'
import todolist from '../../assets/todolist.png'
import planetweightCal from '../../assets/planetweightCal.jpg'
import quizGame from '../../assets/quizGame.jpg'
import ageCalc from '../../assets/ageCalculator.jpg'
import gpt3 from '../../assets/gpt3projectImage.jpg'
import messageBird from '../../assets/messageBirdprojectImage.jpg'

class Projects extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id="projects" className="portfolio__projects section__padding">
                <div className="portfolio__projects-heading">
                    <p>A section of my work</p>
                </div>
                <div className="portfolio__projectsGrid">
                    <div className="portfolio__project todoList">
                        <a href="https://rawcdn.githack.com/Ahmad-mustapha/toDoListApp/78c5a1fc3f08233f0ac103c17388d80eee1c778a/index.html" target="_blank"><img src={todolist}  /></a>
                    </div>
                    <div className="portfolio__project">
                        <a href="https://rawcdn.githack.com/Ahmad-mustapha/Agecalculator/1827dfc529a8dfee50e6ee2ea762b826a2ec86c4/index.html" target="_blank"><img src={ageCalc}  /></a>
                    </div>
                    <div className="portfolio__project">
                        <a href="https://rawcdn.githack.com/Ahmad-mustapha/30DaysOfJavaScript/6672ddd99e7dcf6fc9b96b492c4549ff23027d3d/DAY24%20review/index.html" target="_blank"><img src={planetweightCal}  /></a>
                    </div>
                    <div className="portfolio__project">
                        <a href="https://rawcdn.githack.com/Ahmad-mustapha/myQuizApp/d47128cf6aca0de4591fbb68c650fde2c931156d/index.html" target="_blank"><img src={quizGame}  /></a>
                    </div>
                    <div className="portfolio__project">
                        <a href="http://" target="_blank"><img src={gpt3}  /></a>
                    </div>
                    <div className="portfolio__project">
                        <a href="http://" target="_blank"><img src={messageBird}  /></a>
                    </div>
                </div> 
            </div>
        )
    }
}
export default Projects