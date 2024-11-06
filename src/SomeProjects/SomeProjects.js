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
        title: 'SUPERFIGHTERS OF SURVIVAL',
        text: (<div >
            <ul className={SomeProjectsStyle.listUnordered}>
                <li>Superfighters of Survival es un proyecto de Unreal Engine 5 con un equipo de 30 personas divididas en los principales roles de la industria: diseño, programación, producción y arte.</li>
                <li>SOS es un juego de combate a muerte de gladiadores donde los jugadores luchan por ganar el favor del público en una arena cambiante.</li>
                <li>Este es el proyecto en el que he participado que más se acerca al trabajo real en la industria. El desafío de tener un equipo grande nos permite entender el flujo de trabajo de las empresas del sector.</li>
                <li>
                Trabajar en este proyecto me permitió desarrollar mis habilidades en la documentación de ideas, ya sea con Excel, diagramas o comunicación efectiva, y me permitió aprender algunas disciplinas dentro del diseño de juegos como:
                    <ul>
                        <li>IA: Diseño de diferentes IA con comportamientos cruzados.</li>
                        <li>Combate: Aprendizaje sobre notificadores de eventos en animaciones, ajuste y pulido al máximo.</li>
                        <li>UI/UX: Diseño e implementación extensos de características de UI como tutoriales, mecánicas, animaciones...</li>
                    </ul>
                </li>
            </ul>
        </div>)
    },
    {
        src: CBimg,
        title: 'CURSEBREAKER',
        text: (<div>
            <p>Cursebreaker es el segundo proyecto importante de Unity que completé durante mi año Erasmus y el primero en el que el diseño fue mi enfoque principal, aunque también contribuí a la programación y producción. El proyecto enfrentó numerosos contratiempos, lo que destacó las complejidades del desarrollo de videojuegos. Estos desafíos subrayaron la importancia de la producción y me ayudaron a desarrollar habilidades en mediación, gestión del tiempo y trabajo en equipo.</p>
            <p>Decidimos crear un juego de realidad virtual con seguimiento de manos, una tecnología nueva con muy pocas referencias. Utilizamos bibliotecas de Unity para el reconocimiento de manos, el seguimiento de manos y el seguimiento de gestos, junto con OpenXR para los controles básicos de VR. La falta de referencias nos brindó la oportunidad de innovar e iterar sobre controles y diseños novedosos. Este proyecto profundizó significativamente mi comprensión de la experiencia del usuario, un campo que sigo explorando y aprendiendo.</p>
            <p>El equipo estaba compuesto por siete especialistas, y la comunicación se llevó a cabo constantemente en inglés.</p>
        </div>)
    },
    {
        src: SPOimg,
        title: 'STEAMPUNK OVERRIDE',
        text: (<div >
            <ul className={SomeProjectsStyle.listUnordered}>
                <li>Juego desarrollado en una semana por 5 amigos utilizando Unity durante un game jam.</li>
                <li>El tema era "De 0 a 100", y decidimos hacer un juego de fiesta donde la cooperación es esencial para arrancar un tren y llevarlo a 100 km/h mientras es atacado por monstruos.</li>  
            </ul>
        </div>)
    },
    // Agrega más imágenes aquí
];

export default function SomeProjects({ title }) {
    return (
        <div id="proyectos"className={SomeProjectsStyle.SomeProjects}>
            <h2>{title}</h2>
            <ImageCarousel images={images}></ImageCarousel>
        </div>
    );
}