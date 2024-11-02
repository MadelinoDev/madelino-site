import React from "react"
import SomeProjectsStyle from './SomeProjectsStyles.module.css'


export default function ProjectImg({src, gameName, width1, height}){
    return  (
        <div className={SomeProjectsStyle.ProjectImg}>
            <img src={src} alt={gameName} width={width1} height={height}/>
            {gameName !== "" ? <h4>{gameName}</h4> : <div></div>}
        </div>
    );
}