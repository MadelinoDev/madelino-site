import React from "react"
import styles from "./footerStyles.module.css"


import locationImg from '../img/Footer/location.png'
import phoneImg from '../img/Footer/phone.png'
import mailImg from '../img/Footer/mail.png'

export default function Footer(){
    return  (
        <footer className={styles.footer}>
            <div>
                <img src={locationImg} alt="Location" />
                <p>Vicálvaro, Madrid</p>
            </div>
            <div>
                <img src={mailImg} alt="Mail" />
                <p>madelinodev@gmail.com</p>
            </div>
            <div>
                <img src={phoneImg} alt="Phone Number" />
                <p>+34 657504551</p>
            </div>
        </footer>
    );
}