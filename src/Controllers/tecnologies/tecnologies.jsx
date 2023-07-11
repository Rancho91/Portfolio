import{tecnologies} from "../../Data"
import React from "react"
import styles from "./tecnologies.module.css"
import { useState } from "react"

export default function Tecnologies (){
    const [tecno, setTecno] = useState(0)

const renderTecnologies = () =>{
    let tecn = []
if(tecno===0){
    for(let i = 0;i<=4;i++){
        tecn.push(tecnologies[i].id)
    }
    return tecn
 }
 if(tecno ===1){
    for(let i = 0;i<=4;i++){
        tecn.push(tecnologies[i].id)
    }
    return tecn
 }
 if(tecno===tecnologies.length-2){
    for(let i = tecno-3;i<=tecnologies.length-1;i++){
    tecn.push(tecnologies[i].id)
}
return tecn
}
 if(tecno<tecnologies.length-2 && tecno>1 ){
        for(let i = tecno-2;i<=tecno+2;i++){
        tecn.push(tecnologies[i].id)
    }
    return tecn

    }
if(tecno===tecnologies.length-1){
    for(let i = tecno-4;i<=tecnologies.length-1;i++){
        tecn.push(tecnologies[i].id)
    }
    return tecn
    }

 }

 const handleButton = (e) =>{
    if(e.target.name === "previous" && tecno>0){
        setTecno(tecno-1)
    }
    if(e.target.name === "next" && tecno<tecnologies.length-1){
        setTecno(tecno+1)
    }
 }


 return ( 
    <div className="container">
              <div className="col-1">
                 <button name="previous" onClick={handleButton}>{"<"}</button>
            </div>
        <section className={`row d-flex ${styles.section}`}>
      
           
            {tecnologies?.map((tecnology, index) =>{

                return(
                    <div className={renderTecnologies().includes(tecnology.id)?`col-2 text-white ${styles.slideIn} `:` col d-none ${styles.slideOut}  `} id={index}>
                    <div className={`card bg-dark ${styles.card}`} >
                      <img src={tecnology.image} className={`card-img-top ${styles.image}`} alt="Tecnología" />
                      <div className="card-body">
                        <h5 className={`card-title text-white ${styles.title}`}>{tecnology.name}</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className={`list-group-item bg-dark text-white ${styles.li}`}>{tecnology.version}</li>
                      </ul>
                    </div>
                  </div>
                  )
            }) }
         
        </section>
         <div className="col-1">
            <button name="next" onClick={handleButton}>{">"}</button>
        </div>
    </div>
    )

}


