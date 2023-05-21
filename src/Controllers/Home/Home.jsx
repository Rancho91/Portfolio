import React from 'react'
import Proyect from '../Proyect/Proyect'
import {proyect} from '../../Data'
import styles from './Home.module.css'
import Education from './Edication'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {proyectE} from "../../DataENG"

const Home = () => {
    const [buttons, setButton] = useState(1);
  
    const handleButton = (event) => {
      const id = Number(event.target.id);
      setButton(id);
    };

    const leng = useSelector((state)=>state.lenguage)
  
    return (
      <div>
        <div className='container'>
          <div className='row '>
            <div className='col-md-12'>
              <button
                id='1'
                className={buttons === 1 ? styles.selected : styles.buttons}
                onClick={handleButton}
              >
                
                { leng==="ESP"?"Formacion Educativa":"Educational Background"}
              </button>
              <button
                id='2'
                className={buttons === 2 ? styles.selected : styles.buttons}
                onClick={handleButton}
              >
               { leng==="ESP"?"Proyectos":"Projects"}
              </button>
            </div>
          </div>
        </div>
  
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {buttons === 1 ? <Education /> : null}
              {buttons === 2 ? (
                leng==="ENG"?(proyectE.map((proyect) => (
                  <Proyect
                    name={proyect.name}
                    image={proyect.image}
                    tecnologies={proyect.tecnologies}
                    description={proyect.description}
                    git={proyect.git}
                    youtube={proyect.youtube?proyect.youtube:null}
                  />
                )) ):(
                proyect.map((proyect) => (
                  <Proyect
                    name={proyect.name}
                    image={proyect.image}
                    tecnologies={proyect.tecnologies}
                    description={proyect.description}
                    git={proyect.git}
                    youtube={proyect.youtube?proyect.youtube:null}
                  />
                )))):null}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home