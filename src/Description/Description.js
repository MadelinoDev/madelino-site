import React from "react"
import styles from "./descriptionStyles.module.css"




export default function Description() {
    return (
        <div id="description" className={styles.description}>
            <div>
                <p>Programador y diseñador de videojuegos con conocimientos en otros campos como la Inteligencia Artificial, Big Data, animación, modelado y sonido. He completado tareas de programación y diseño en equipos medianos y grandes.</p>
                <p>Mi objetivo profesional es adquirir experiencia en programación participando en diferentes proyectos.</p>
                <a className='DownloadButton' href="https://drive.google.com/uc?export=download&id=1UM2tmeHWT3Ei_yluMFL2EMoWQ16udFun" download>
                    <div>Descargar CV</div>
                </a>
            </div>
        </div>
    );
}