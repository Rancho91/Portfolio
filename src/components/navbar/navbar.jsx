import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./navbar.module.css";
import { useSelector } from "react-redux";
import ButtonsLeng from "../buttonLeng/buttons";
const NavBar = () => {
  const leng = useSelector((state) => state.lenguage);

  return (
    <Navbar className={`sticky-top ${styles.navbar}`} expand="lg">
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />

      <Navbar.Collapse id="navbarNavAltMarkup">
        <div className="row d-flex w-100">
          <div className="col-8 d-flex justify-content-start">
            <div className="row d-flex ">
              <div className="col-3">
                <button id="1" className={styles.buttonNav}>
                  <a href="#detail"> {leng === "ESP" ? "Abaut" : "Abaut"}</a>
                </button>
              </div>
              <div className="col-3">
                <button id="1" className={styles.buttonNav}>
                  <a href="#educacion">
                    {" "}
                    {leng === "ESP" ? "Educacion" : "Education"}
                  </a>
                </button>
              </div>
              <div className="col-3">
                <button id="2" className={styles.buttonNav}>
                  <a href="#card">
                    {leng === "ESP" ? "Proyectos" : "Projects"}
                  </a>
                </button>
              </div>
              {/* <div className="col-4">
                  <button id="3" className={styles.buttonNav}>
                   <a href="tecnologias"> {leng === "ESP" ? "Tecnologias" : "Tecnologies"}</a>
                  </button>
                </div> */}
              <div className="col-3">
                <button className={styles.buttonNav}>
                  <a href="#contacto">
                    {leng === "ESP" ? "Contacto" : "Contact"}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <ButtonsLeng />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
