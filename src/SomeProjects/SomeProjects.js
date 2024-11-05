import React from "react"
import ProjectImg from './ProjectImg'

import SomeProjectsStyle from './SomeProjectsStyles.module.css'
import ImageCarousel from "./ImageCaroussel"


import SOSimg from '../img/Games/SOSgameplay.jpg'
import CBimg from '../img/Games/Cursebreaker.png'
import SPOimg from '../img/Games/SPO.png'


const images = [
    {
      src: SOSimg,
      text: 'Esta es la primera imagen',
    },
    {
      src: CBimg,
      text: 'Esta es la segunda imagen',
    },
    {
        src: SPOimg,
        text: 'Esta es la tercera imagen',
      },
    // Agrega más imágenes aquí
  ];

export default function SomeProjects({title}){
    return  (
        <div className={SomeProjectsStyle.SomeProjects}>
            <h2>{title}</h2>
            <ImageCarousel images={images}></ImageCarousel>
            {/* <ProjectImg src={SOSimg} gameName="SUPERFIGHTERS OF SURVIVAL"></ProjectImg>
            <ProjectImg src={CBimg} gameName="CURSEBREAKERS"></ProjectImg>
            <ProjectImg src={SPOimg} gameName="STEAMPUNK OVERRIDE"></ProjectImg> */}
        </div>
    );
}