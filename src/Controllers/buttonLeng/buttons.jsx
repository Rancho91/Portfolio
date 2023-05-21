import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import {setLenguage} from "../../redux/actions/actions"
import style from "./buttons.module.css"
function ButtonsLeng(){
    const dispatch = useDispatch()
const changeLenguage = (e) =>{
    
    dispatch(setLenguage(e.target.name))
}
const leng = useSelector((store)=>{
    return store.lenguage
})

console.log(leng)
    return(
        <div className={`container`} style={{ marginTop: '2%' }}>
            <div className="row justify-content-end">
                <button className={`col-1 ${leng === "ENG" ? style.selected : style.buttons}`} name="ENG" onClick={changeLenguage}>ENG</button>
                <button className={`col-1 ${leng === "ESP" ? style.selected : style.buttons}`} name="ESP" onClick={changeLenguage}>ESP </button>
            </div>


        </div>
    )
}

export default ButtonsLeng