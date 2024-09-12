const initialValue = []

const likes = function (state = initialValue, action) {
    if (action.type = "ADD" && action.payload!=undefined) {
        console.log(action.payload);
        
        return [...state, action.payload]
    } else if (action.type = "REMOVE") {
        
    }
    return state
}

export default likes