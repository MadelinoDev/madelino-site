import React from "react"
import ImgCanva from './ImgCanva'

import SomeProjectsStyle from './SomeProjectsStyles.module.css'


import SOSimg from '../img/Games/SOSgameplay.jpg'



export default function SomeProjects(){
    return  (
        <div className={SomeProjectsStyle.SomeProjects}>
            <h2>Algunos proyectos</h2>
            <ImgCanva src={SOSimg} gameName="SUPERFIGHTERS OF SURVIVAL"></ImgCanva>
            <ImgCanva src={SOSimg} gameName="CURSEBREAKERS"></ImgCanva>
            <ImgCanva src={SOSimg} gameName="STEAMPUNK OVERRIDE"></ImgCanva>
        </div>
    );
}