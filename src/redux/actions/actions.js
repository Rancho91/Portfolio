export const LENGUAGE = "LENGUAGE"
export const SCROLL = "SCROLL"

export function setLenguage (leng){
    return{type:LENGUAGE, payload: leng}
}

export function setScroll (scroll){
    return{type:SCROLL, payload:scroll}
}