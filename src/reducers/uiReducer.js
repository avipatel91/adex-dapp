import { UPDATE_UI } from 'constants/actionTypes'
import initialState from 'store/initialState'

export default function uiReducer(state = initialState.ui, action) {
    let newState

    switch (action.type) {
        case UPDATE_UI:
            newState = { ...state }
            newState[action.item] = action.value
            return newState

        default:
            return state
    }
}
