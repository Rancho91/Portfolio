import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLenguage } from "../../redux/actions/actions";
import style from "./buttons.module.css";
function ButtonsLeng() {
  const dispatch = useDispatch();
  const changeLenguage = (e) => {
    dispatch(setLenguage(e.target.name));
  };
  const leng = useSelector((store) => {
    return store.lenguage;
  });

  console.log(leng);
  return (
    <div className={`row d-flex flex-row ${style.container}`}>
      <div className="col-6 d-flex flex-row justify-content-between">
        <div className="col-4">
          <a
            href="https://www.linkedin.com/in/ramiro-sanchez-solano/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${style.img}`}
              src={
                "https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688648242/b0mnhfatyhz3ckvgcsfg.png"
              }
              alt="LinkedIn"
              title="LinkedIn"
              loading="lazy"
            />
          </a>
        </div>
        <div className="col-4">
          <a
            href="https://github.com/Rancho91"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${style.img}`}
              src={
                "https://res.cloudinary.com/dxatwbzff/image/upload/v1684165478/github_logo_icon_147285_zgpagr.png"
              }
              alt="GitHub"
              title="GitHub"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="col-6 d-flex flex-row justify-content-between">
        <div className="col-5">
          <button
            className={`col-1 ${
              leng === "ENG" ? style.selected : style.buttons
            }`}
            name="ENG"
            onClick={changeLenguage}
          >
            ENG
          </button>
        </div>
        <div className="col-5 ">
          <button
            className={`${leng === "ESP" ? style.selected : style.buttons}`}
            name="ESP"
            onClick={changeLenguage}
          >
            ESP{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonsLeng;
