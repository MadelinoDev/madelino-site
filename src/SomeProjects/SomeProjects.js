import React from "react"
import ProjectImg from './ProjectImg'

import SomeProjectsStyle from './SomeProjectsStyles.module.css'


import SOSimg from '../img/Games/SOSgameplay.jpg'
import CBimg from '../img/Games/Cursebreaker.png'
import SPOimg from '../img/Games/SPO.png'



export default function SomeProjects({title}){
    return  (
        <div className={SomeProjectsStyle.SomeProjects}>
            <h2>{title}</h2>
            <ProjectImg src={SOSimg} gameName="SUPERFIGHTERS OF SURVIVAL"></ProjectImg>
            <ProjectImg src={CBimg} gameName="CURSEBREAKERS"></ProjectImg>
            <ProjectImg src={SPOimg} gameName="STEAMPUNK OVERRIDE"></ProjectImg>
        </div>
    );
}