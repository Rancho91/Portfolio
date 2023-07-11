import React from 'react'
import styles from './proyect.module.css'
import './card.css'

export default function Proyect ({name, image, tecnologies, description,git, youtube}){


    return(
        <div className={` container ${styles.card}`}>
            <div className="row">
            <div className='col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center' >
                <h1 className={styles.title}>{name}</h1>
                <img src={image } className={`img-fluid ${styles.imageCard}`}></img>
                


            </div>

            <div className='col-md-8'>
            <p className={styles.parrafo}>{description}</p>
            <div className="row d-flex align-items-center justify-content-center">
  <div className="col-md-3 col-sm-2 ">
    <a href={git} target="_blank">
      <img
        src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684165478/github_logo_icon_147285_zgpagr.png"
        alt=""
        className={`img-fluid ${styles.imageGit}`}
        
      />
    </a>
  </div>
  <div className="col-md-3 col-sm-2 ">
    {youtube ? (
      <a href={youtube} target="_blank">
        <img
          src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684173827/youtube-logo-hd-8_hetpch.png"
          alt=""
          className={`img-fluid ${styles.imgYoutube}`}
          
        />
      </a>
    ) : null}
  </div>
</div>
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