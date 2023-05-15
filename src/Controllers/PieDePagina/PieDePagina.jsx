import styles from './PieDePagina.module.css'
import React from 'react'

const PieDePagina = () =>{


    return (
    <div className='conteiner'>
        <div className='row justify-content-center'>
        <div className='col-md-2 col-sm-12'>
            <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/gMail_croiz4.webp" className={`img-fluid ${styles.image}`} alt="" />
            <h3 className={styles.title}>RamiroSanchezSolano@gmail.com</h3>
        </div>
        <div className='col-md-2 col-sm-12'>
            <img src='https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/Telefono_b2je6v.jpg' className={`img-fluid ${styles.image}`}></img>
            <h3 className={styles.title}>3548504261</h3>
        </div>
        <div className='col-md-2 col-sm-12'>
            <img src='https://res.cloudinary.com/dxatwbzff/image/upload/v1683542667/01a98b056ed72c91be89177576dbc999_wfhssx.png' className={`img-fluid ${styles.image}`}></img>
            <h3 className={styles.title}>Cordoba, Argentina</h3>
        </div>
       <div className='col-md-2 col-sm-12'>
            <a href="https://www.linkedin.com/in/ramiro-sanchez-solano/" target="_blank">
            <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/Linkedin_wvwa2u.png" alt=""  className={`img-fluid ${styles.image}`}/>
            </a>
            <h3 className={styles.title}>Linkedin</h3>
        </div>
        <div className='col-md-2 col-sm-12'>
        <a href="https://github.com/Rancho91" target="_blank">
            <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684165478/github_logo_icon_147285_zgpagr.png" alt="" 
            className={`img-fluid ${styles.image}`}/>
            </a>
            <h3 className={styles.title}>GitHub</h3>
        </div>

        </div>
        
    </div>)
}

export default PieDePagina
