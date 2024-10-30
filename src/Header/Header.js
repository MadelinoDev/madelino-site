import React from "react"
import styles from "./headerStyles.module.css"


export default function Header(){
    return  (
        <header className={styles.header}>
            <a>Curriculum</a>
            <a>Proyectos</a>
            <a>Sobre mí</a>
        </header>
    );
}