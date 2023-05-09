import React from 'react'
import styles from './proyect.module.css'
import './card.css'

export default function Proyect ({name, image, tecnologies, description,git}){


    return(
        <div className={styles.card}>
            <div>
                <h1>{name}</h1>
                <img src={image} ></img>
            </div>   
            <div className={styles.body}>
            <p>{description}</p>
            <a href={git}> <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/GitHub_hpyl4c.png" alt="" /></a> 

            <div className={styles.tecnologies}>
                {tecnologies.map(tecnology=>{
                    return(
                        <div className={styles.tecnology}>
                            {/* <h1>{tecnology.name}</h1> */}
                            <img src={tecnology.image}/>
                        </div>
                    )
                 })} 
                 
                </div>
            </div>
    
        </div>

       
    )
}