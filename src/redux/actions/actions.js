


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