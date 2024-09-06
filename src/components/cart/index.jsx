import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";

function Cart() {
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    function handleClick(index) {
        dispatch(removeFromCart(index))
    }

    if (cart.length === 0) {
        return(
            <div >
                <h1>Cart</h1>
                <p>Cart is empty</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Cart</h1>
                {cart.map((el,i) => {
                    return (
                        <div className="product" key={Math.random()}>
                            <p>{el.name}</p>
                            <p>{el.price}</p>
                            <button onClick={() => handleClick(i)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }
    
}

export default Cart