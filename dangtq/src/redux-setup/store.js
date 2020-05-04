import { createStore } from 'redux'

const defaultState = {
    time: 10,
    status: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "START-TIME":
            return { ...state, time: state.time - 1, status: true }
        case "STOP-TIME":
            return { ...state, status: false }
        case "RESET-TIME":
            return defaultState
        default:
            return state
    }
}

const store = createStore(reducer)

export default store