import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useDispatch, useSelector } from 'react-redux';

function ReduxAddToCart({ product }) {
    const dispatch = useDispatch();
    // const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    let quantity = useSelector((state) =>{
        return state.items[product.id]? state.items[product.id].quantity: 0;
    });

  

    // if (!product || !product.id) {
    //     console.error("Product is undefined or does not have an id property", product);
    //     return null; // or render some fallback UI
    // }

    function increase() {
        //dispatch({type:, payload})
        dispatch({type: "ADD_TO_CART", payload: product})
    }

    function decrease() {
        //dispatch({type:, payload})
        dispatch({type: "REMOVE_FROM_CART", payload: product})
    }

    

    if (quantity === 0) {
        return (
            <div>
            <button onClick={increase}>AddToCart</button>
            </div>
        )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}

export default ReduxAddToCart;


// array of object 
// object of object 

//[{id: 1, quantity: 10}, {id: 2, quantity: 10}, {id: 3, quantity: 10}, {id: 4, quantity: 10}]
// cart = 
// {id:{id: 1, quantity: 10}, id:{id: 2, quantity: 10}, id:{id: 3, quantity: 10}, id:{id: 4, quantity: 10}}
//cart["3"]

// Object.value(obj);
// Object.keys(obj);