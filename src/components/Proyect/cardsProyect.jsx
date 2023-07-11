import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./cardProyect.module.css";

export default function CardProyect(props) {
  const { name, image, git, youtube, id } = props.lengu;
  const [isFocus, setIsFocus] = useState(false);
  const handleMouseEnter = () => {
    setIsFocus(!isFocus);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.3}}
      className={`col-12 d-flex flex-column justify-content-between align-item-between ${styles.containerCard}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      <motion.div
        className={`col-12  d-flex flex-column align-items-end justify-content-end ${styles.imageCard}`}
        style={{ backgroundImage: `url("${image}")` }}
      >
        {isFocus && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={` col-12 d-flex flex-column align-items-between justify-content-center ${styles.links}`}
            >
              <div>
                <h1 className={styles.title}>{name}</h1>
              </div>
              <div className="row align-items-center justify-content-center">
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
                  <a href={youtube ? youtube : null} target="_blank">
                    <img
                      src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684173827/youtube-logo-hd-8_hetpch.png"
                      alt=""
                      className={`img-fluid ${styles.imgYoutube}`}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            <a href="#detail" className={styles.aDetail}> <motion.button
              initial={{ opacity: 0, y:-100 }}
              animate={{ opacity: 1, y:0}}
              exit={{ opacity: 0, y:-100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id={id}
              onClick={props.handleMotion}
              className={styles.button}
            >
            More
            </motion.button></a>
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  );
}
