import React from 'react'
import styles from './education.module.css'
import {education} from "../../Data"
import {educationE} from "../../DataENG"
import { useSelector } from 'react-redux'

const Education = () =>{

    const leng = useSelector(state=>state.lenguage)

    return(
        <div className={``}>
            <h1>{leng==="ESP"?"Educacion":"Education"}</h1>
            {leng==="ESP"?(education.map((ed)=>{
                return(
                    <div className={`${styles.bo1}`}>
                    <div className="row ">
                        <div className='col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center'>
                            <h2 className={styles.title}>{ed.institution}</h2>
                            <img src={ed.image} alt={ed.title} className={`img-fluid ${styles.image}` }/>    
                        </div>  
                        <div className='col-md-8 col-sm-12'>
                            <h3 className={styles.title}>{ed.subtitle}</h3>
    
                            <p className={styles.parrafo}>{ed.description}</p> 
                        </div>
                    </div>
                </div>
                    )
            })):(educationE.map((ed)=>{
                return(
                    <div className={`${styles.bo1}`}>
                    <div className="row ">
                        <div className='col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center'>
                            <h2 className={styles.title}>{ed.institution}</h2>
                            <img src={ed.image} alt={ed.title} className={`img-fluid ${styles.image}` }/>    
                        </div>  
                        <div className='col-md-8 col-sm-12'>
                            <h3 className={styles.title}>{ed.subtitle}</h3>
    
                            <p className={styles.parrafo}>{ed.description}</p> 
                        </div>
                    </div>
                </div>
                    )
            }))}
        </div>
    )
}

export default Education