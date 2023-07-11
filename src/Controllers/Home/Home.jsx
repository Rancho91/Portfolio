import React from 'react'
import Proyect from '../Proyect/Proyect'
import {proyect} from '../../Data'
import styles from './Home.module.css'
import Education from './Edication'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {proyectE} from "../../DataENG"
import { Navbar, Nav } from 'react-bootstrap';
import Tecnologies from '../tecnologies/tecnologies'
const Home = () => {
    const [buttons, setButton] = useState(1);
  
    const handleButton = (event) => {
      const id = Number(event.target.id);
      setButton(id);
    };

    const leng = useSelector((state)=>state.lenguage)
  
    return (
      <div>
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav>
            <Nav.Link id='1'><button 
                id='1'
                className={`${buttons === 1 ? styles.selected : styles.buttons}`}
                onClick={handleButton}
              >
                        { leng==="ESP"?"Formacion Educativa":"Educational Background"}
              </button></Nav.Link>
            <Nav.Link id='2'><button
                id='2'
                className={`${buttons === 2 ? styles.selected : styles.buttons}`}
                onClick={handleButton}
              >
               { leng==="ESP"?"Proyectos":"Projects"}
              </button></Nav.Link>
              <Nav.Link id='3' className="d-none d-sm-block"><button
                id='3'
                className={`${buttons === 3 ? styles.selected : styles.buttons}`}
                onClick={handleButton}
              >
               { leng==="ESP"?"Tecnologias":"Tecnologies"}
              </button></Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={`col-md-12 ${styles.container}`}>
               <Education />
                {leng==="ENG"?(proyectE.map((proyect) => (
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
                )))}
            <Tecnologies/>
          </div>

    </div>
  </div>
    );
  };

export default Home