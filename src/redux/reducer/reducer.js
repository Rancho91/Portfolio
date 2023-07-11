import { LENGUAGE, SCROLL } from "../actions/actions";

const initialState = {
  lenguage: "eng",
  scroll: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LENGUAGE:{
            return {...state, lenguage:action.payload}
        }
        case SCROLL:{
            if(action.payload==="fixed")return {...state, scroll:true}
            if(action.payload ==="move") return {...state, scroll:false}
            
        }
            
        default:
                return state;
        
    }

}