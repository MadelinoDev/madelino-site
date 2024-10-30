import React from "react"
import SomeProjectsStyle from './SomeProjectsStyles.module.css'


export default function ImgCanva({src, gameName}){
    return  (
        <div className={SomeProjectsStyle.ImgCanva}>
            <img src={src} alt={gameName} width="500px"/>
            <h4>{gameName}</h4>
        </div>
    );
}