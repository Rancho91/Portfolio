import React, { useState, useEffect } from "react";
import styles from "./proyect.module.css";
import { proyect } from "../../Data";
import { proyectE } from "../../DataENG";
import { useSelector } from "react-redux";
import CardProyect from "./cardsProyect";
import { motion, AnimatePresence } from "framer-motion";
import CardAnimate from "./animate";
import { setScroll } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

export default function Proyect() {
  const leng = useSelector((state) => state.lenguage);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(-1);
  const dispatch = useDispatch();
  const data = () => {
    let response;
    leng === "ENG" ? (response = proyectE) : (response = proyect);
    return response;
  };
  const handleMotion = (e) => {
    if (e.target.id === "close") {
      setVisible(false);
      console.log(e.target.id);
      dispatch(setScroll("move"));
      return;
    }
    setVisible(true);
    setAnimate(e.target.id);
    dispatch(setScroll("fixed"));
  };
  const lenguage = data();

  return (
    <div className={styles.container} >
      <div>
      <h1 className={styles.title}>{leng=="ESP"?"Proyectos":"Proyect"}</h1>
      </div>
      <div
        className={`row d-flex flex-row justify-content-center align-items`}
      >
        {lenguage.map((l) => {
          return (
            <motion.div layautID={l.id} className="col-3">
              <CardProyect lengu={l} handleMotion={handleMotion} />
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            layautID={visible}
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9998,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            {" "}
            <div>
              <CardAnimate
                lengu={lenguage[animate - 1]}
                handleMotion={handleMotion}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
