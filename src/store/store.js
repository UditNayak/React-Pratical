import {createStore} from "redux";

function cartReducer(state= {item:{}}, action){
    switch(action.type){
        case "ADD_TO_CART": {

        }
        
        case "REMOVE_FROM_CART": {

        }
        default:
            return
    }
}

const store = createStore(cartReducer);

export default store;