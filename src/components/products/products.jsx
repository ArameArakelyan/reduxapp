import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actions";

function Products() {
    const products = useSelector((state)=>state.products)
    const dispatch = useDispatch()

    function handleClick(product) {
        dispatch(addToCart(product))
        
    }

    return(
        <div>
           {products.map((el)=>{
            return(
                <div className="product" key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                    <button onClick={()=>handleClick(el)}>Add to Cart</button>
                </div>
            )
           })}
        </div>
    )
}

export default Products