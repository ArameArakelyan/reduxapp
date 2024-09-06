
const initialvalue = []

const cart = function (state = initialvalue,action) {
    if (action.type === "ADD") {
        return([...state, action.payload])
    } else if (action.type === "REMOVE") { 
       return(state.filter((el,i)=> i!==action.payload))
    }
    return state
}

export default cart