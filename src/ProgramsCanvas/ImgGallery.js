import React from "react"
import ImgCanva from '../SomeProjects/ProjectImg'

import ProgramsCanvaStyle from './ProgramsCanvasStyles.module.css'






export default function ImgGallery({title ,imgs}){
    return  (
        <div className={ProgramsCanvaStyle.ImgGallery}>
            <h2>{title}</h2>
            {imgs.map((image) => <img  src={image.src} alt={image.alt}/>)}
        </div>
    );
}