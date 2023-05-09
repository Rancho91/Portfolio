import styles from './PieDePagina.module.css'
import React from 'react'

const PieDePagina = () =>{


    return (
    <div className={styles.conteiner}>
        <div>
            <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/gMail_croiz4.webp" alt="" />
            <h3>RamiroSanchezSolano@gmail.com</h3>
        </div>
        <div>
            <img src='https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/Telefono_b2je6v.jpg'></img>
            <h3>3548504261</h3>
        </div>
        <div>
            <img src='https://res.cloudinary.com/dxatwbzff/image/upload/v1683542667/01a98b056ed72c91be89177576dbc999_wfhssx.png'></img>
            <h3>Cordoba, Argentina</h3>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/ramiro-sanchez-solano/">
            <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/Linkedin_wvwa2u.png" alt="" />
            </a>
            <h3>Linkedin</h3>
        </div>
        <div>
        <a href="https://github.com/Rancho91">
            <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/GitHub_hpyl4c.png" alt="" />
            </a>
            <h3>GitHub</h3>
        </div>

    </div>)
}

export default PieDePagina
