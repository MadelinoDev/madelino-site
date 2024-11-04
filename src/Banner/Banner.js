import React from "react"
import styles from "./bannerStyles.module.css"


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.tituloManu}>
                <h2>Manuel Adeliño Consuegra</h2>
                <h3>Desarrollador y Diseñador de videojuegos</h3>
            </div>
        </div>

    );
}



