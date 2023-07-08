
import { INCREMENT,DECREMENT,RESET } from "../actions/actionTypes.js"; 

const initialState =  0

const counterReducer = (state=initialState, action) =>{

    switch(action.type){
         case INCREMENT:
                return state + action.value
         case DECREMENT:
                return state - 1
        case RESET:
                return 0
       default:
              return state
    }

}
// {
//        type:INCREMENT,
//        value:value
//  }
export default counterReducer




