const initialState = ""

function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case "SEARCH":
            return action.payload
        default:
            return state
    }
}

export default SearchReducer;