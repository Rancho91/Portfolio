import React from 'react'
import styles from './proyect.module.css'
import './card.css'

export default function Proyect ({name, image, tecnologies, description,git}){


    return(
        <div className={`${styles.card}`}>
            <div className="row">
            <div className='col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center' >
                <h1 className={styles.title}>{name}</h1>
                <img src={image } className={`img-fluid ${styles.imageCard}`}></img>
            </div>   
            <div className='col-md-8'>
            <p className={styles.parrafo}>{description}</p>
            <a href={git}> <img src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684165478/github_logo_icon_147285_zgpagr.png" alt=""className={`img-fluid ${styles.image}`} /></a> 

            <div className='row'>
                {tecnologies.map(tecnology=>{
                    return(
                        <div className='col'>
                             <h1 className={styles.tecnologyTitle}>{tecnology.name}</h1>
                            <img src={tecnology.image} className={`img-fluid ${styles.image}`}/>
                        </div>
                    )
                 })} 
                 
                </div>
            </div>
        </div>
    
        </div>

       
    )
}