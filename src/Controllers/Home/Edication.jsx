import React from 'react'
import styles from './Education.module.css'

const Education = () =>{



    return(
        <div className={styles.conteiner}>
            <div className={styles.box}>
                <div className={styles.title}>
                    <h2>Soy Henry</h2>
                    <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1683546008/logoOG_t1pjbj.png" alt="" />    
                </div>  
                <div className={styles.description}>
                <h3>Bootcamp: Full stack developer</h3>

                    <p>Realizado desde enero de 2023 y ya finalizado, durante el curso se llevaron a cabo proyectos individuales y un proyecto final en equipo. Durante este proceso, desarrollé habilidades técnicas en JavaScript, React, NodeJS, Express, Sequelize, PostgreSQL y Redux. Durante la instancia del proyecto final, adquirí competencias en el manejo de GitHub, Scrum, Trello, resolución de problemas, proactividad y trabajo en equipo</p> 
                </div>
               
            </div>
            <div className={styles.boxUTN}>
            <div className={styles.title}>
                    <h2>Universidad Tecnologica Nacional</h2>
                    <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1683549903/tup_completo_blanco_transparente_epv0bj.png" alt="" />    
                </div>  
                <div className={styles.description}>
                <h3>Tecnicatura Universitaria en Programacion</h3>

                    <p>
                        Realizado desde enero de 2023 y ya finalizado, durante el curso se llevaron a cabo proyectos individuales y un proyecto final en equipo. Durante este proceso, desarrollé habilidades técnicas en JavaScript, React, NodeJS, Express, Sequelize, PostgreSQL y Redux. Durante la instancia del proyecto final, adquirí competencias en el manejo de GitHub, Scrum, Trello, resolución de problemas, proactividad y trabajo en equipo.</p> 
                </div>
            </div>
        </div>
    )
}

export default Education