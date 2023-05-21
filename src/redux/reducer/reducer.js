import { LENGUAGE } from "../actions/actions";

const initialState = {
  lenguage: "eng"
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LENGUAGE:{
            return {...state, lenguage:action.payload}
        }
            
        default:
                return state;
        
    }

}