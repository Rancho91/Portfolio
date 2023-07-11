import NavBar from "../navbar/navbar";
import React from "react";
import Proyect from "../Proyect/Proyect";
import Abaut from "../abaut/abaut";
import Education from "../education/education";
import styles from "./home.module.css";
import Contact from "../contacto/contact";
const Home = () => {
  return (
    <>
      <NavBar />
      <div id="detail">
        <Abaut />
      </div>
      
      <div className={styles.proyect} id="card">
        <Proyect />
      </div>
      <div className={styles.education} id="educacion">
        <Education />
      </div>
      <div id="contacto" className={styles.proyect}>
        <Contact />
      </div>
    </>
  );
};

export default Home;
