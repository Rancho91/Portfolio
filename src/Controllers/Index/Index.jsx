import styles from './index.module.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Index = () =>{
    

    return(<div className={styles.conteiner}>
        <div className={styles.description}>
            <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1683541346/Captura_de_pantalla_2023-05-08_072143_zyvftu.png" alt="" />
            <p className={styles.description}> Hola, mi nombre es Ramiro y desde que descubrí el mundo del desarrollo, me estoy formando activamente en esta carrera. Actualmente, soy estudiante de la carrera universitaria en Programación y durante mi cursado, realicé el bootcamp de Soy Henry. Este curso me permitió reafirmar mi gusto por este oficio y me incentivó a comenzar la búsqueda de mi primer trabajo en el mundo IT.
            <br />
            Soy una persona proactiva y entusiasta, y me gusta estar en constante aprendizaje. Actualmente, estoy enfocado en perfeccionar mis habilidades en programación orientada a objetos y los principios SOLID. He notado que estos temas son importantes para el desarrollo de proyectos, el código limpio y reutilizable, y estoy motivado para aplicarlos en mi futuro trabajo.
            <br />
            Agradezco tu tiempo y espero con ansias tu respuesta. ¡Muchas gracias! 
            </p>
        </div>
        <div>
            <Link to='/home'>
                <button className={styles.button}>conoceme</button>
            </Link>
                
        </div>

    </div>)
}

export default Index