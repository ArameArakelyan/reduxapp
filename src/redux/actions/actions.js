import { type } from "@testing-library/user-event/dist/type"
import { createStore } from "redux"



const action =
    function (state, action) {
        if (action.type === "ADD") {
            return([...state, action.payload])
        } else if (action.type === "REMOVE") {
            return(state.filter((el)=> el!=index))
        }
        return state
        }


export const addToCart = (product) => {
    return ({
        type: "ADD",
        payload: product
    })
}

export const removeFromCart = (index) => {
    return ({
        type: "REMOVE",
        payload: index
    })
}