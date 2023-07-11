import React from "react";
import styles from "./cardAnimate.module.css";

const CardAnimate = ({ lengu, handleMotion }) => {
  let lenguage = {};
  if (lengu) lenguage = lengu;
  const { name, image, tecnologies, description, git, youtube } = lenguage;

  return (
    <div className={`container align-items-between  ${styles.container}`}>
      <div className={`col-12 d-flex justify-content-end `}>
        <a href="#card">
          {" "}
          <button className={styles.button} id="close" onClick={handleMotion}>
            x
          </button>
        </a>
      </div>
      <div className="col-12 d-flex align-items-center justify-content-center">
        <h1 className={styles.title}>{name ? name : null}</h1>
      </div>
      <div className="row">
        <div className="col-6 d-flex flex-column align-items-between justify-content-center">
          <div
            className={`col-12  ${styles.imageCard}`}
            style={{ backgroundImage: `url("${image ? image : null}")` }}
          ></div>
        </div>
        <div
          className={`col-6 d-flex flex-column align-items-center justify-content-center`}
        >
          <p className={styles.parrafo}>{description ? description : null}</p>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3 col-sm-2  ">
              <a href={git ? git : null} target="_blank">
                <img
                  src="https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/GitHub_hpyl4c.png"
                  alt=""
                  className={`img-fluid ${styles.imageGit}`}
                />
              </a>
            </div>

            <div className="col-md-3 col-sm-2 ">
              {youtube ? (
                <a href={youtube ? youtube : null} target="_blank">

                    <img
                      src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684173827/youtube-logo-hd-8_hetpch.png"
                      alt=""
                      className={`img-fluid ${styles.imgYoutube}`}
                      
                    />

                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <footer className={`footer-fluid mt-auto ${styles.tecnologies}`}>
        <div className="row d-flex flex-row justify-aling-between align-item-end">
          {tecnologies?.map((tecnology) => {
            return (
              <div className="col">
                <img
                  src={tecnology.image}
                  className={`img-fluid ${styles.imageT}`}
                  title={tecnology.name}
                />
              </div>
            );
          })}
        </div>
      </footer>
    </div>

    // <h1 className={styles.title}>{name}</h1>
    // <div className="col-12">
    //    <p className={styles.parrafo}>{description}</p> */
    //  <div className="row d-flex align-items-center justify-content-center">
    //     <div className="col-md-3 col-sm-2 ">
    //       <a href={git} target="_blank">
    //         <img
    //           src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684165478/github_logo_icon_147285_zgpagr.png"
    //           alt=""
    //           className={`img-fluid ${styles.imageGit}`}
    //         />
    //       </a>
    //     </div>
    //     <div className="col-md-3 col-sm-2 ">
    //       {youtube ? (
    //         <a href={youtube} target="_blank">
    //           <img
    //             src="https://res.cloudinary.com/dxatwbzff/image/upload/v1684173827/youtube-logo-hd-8_hetpch.png"
    //             alt=""
    //             className={`img-fluid ${styles.imgYoutube}`}
    //           />
    //         </a>
    //       ) : null}
    //     </div>
    //   </div>
    //   <div className="row">
    //     {tecnologies?.map((tecnology) => {
    //       return (
    //         <div className="col">
    //           <h1 className={styles.tecnologyTitle}>{tecnology.name}</h1>
    //           <img
    //             src={tecnology.image}
    //             className={`img-fluid ${styles.imageT}`}
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};
export default CardAnimate;
