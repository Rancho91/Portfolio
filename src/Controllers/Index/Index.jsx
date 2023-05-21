import styles from './index.module.css'
import { Link } from 'react-router-dom'
import React from 'react'
import {abaut} from "../../Data"
import { abautE } from '../../DataENG'
import { useSelector } from 'react-redux'
import { setLenguage } from '../../redux/actions/actions'
const Index = () =>{
    const leng = useSelector(store=>store.lenguage)
    return(
        <div className={`container ${styles.container} d-flex justify-content-center`}>
        <div className={`row ${styles.rowCentered}`}>
          <div className={`col-md-4 col-sm-10 ${styles.image} ` } >
            <img
              src="https://res.cloudinary.com/dxatwbzff/image/upload/v1683541346/Captura_de_pantalla_2023-05-08_072143_zyvftu.png"
              className="img-fluid"
              alt="profile photo"
              
            />
          </div>
          <div className={`col-md-8 col-sm-12 ${styles.description}`}>
            <p >
              {leng==="ENG"?abautE:abaut}
            </p>
          </div>
          <div>
            <Link to="/home">
              <button className={styles.button}> {leng==="ENG"?"My Portfolio":"Mi Portfolio"}</button>
            </Link>
          </div>
        </div>
      </div>)
}

export default Index