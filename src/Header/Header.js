import React, { useState, useEffect } from 'react';
import styles from "./headerStyles.module.css"
import { Link, animateScroll as scroll } from 'react-scroll';


export default function Header() {
    const [opacity, setOpacity] = useState(0.8);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newOpacity = scrollPosition / 200;
            setOpacity(Math.max(0, Math.min(newOpacity, 1)));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    //color azul 20, 45, 90
    return (
        <header className={styles.header} style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
            <div className={styles.headerLeft} style={{ color: `rgba(255, 255, 255, ${opacity})` }}>
                <p>Manuel Adeliño Consuegra</p>
            </div>
            <div className={styles.headerRight}>
                <Link
                    activeClass="active"
                    to="description"
                    spy={true}
                    smooth={true}
                    offset={-70}
                >
                    Curriculum
                </Link>
                <Link
                    activeClass="active"
                    to="proyectos"
                    spy={true}
                    smooth={true}
                    offset={-50}
                >
                    Proyectos
                </Link>
            </div>

        </header>
    );
}