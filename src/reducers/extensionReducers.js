const initialState = {
    checked: false
}

const extensionReducers = (state = initialState, action) => {
    switch (action.type) {
        case "CHECKED_STATUS":
            const {status} = action.payload
            console.log(status);
            return {
                ...state,
                checked : status
            }

        default: return state;
    }
}
export default extensionReducers;