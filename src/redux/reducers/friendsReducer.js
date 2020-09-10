import { GET_FRIENDS_REQUEST, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAIL } from "../types"

const initialState = {
    request: false,
    friends: [],
    error: false
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_FRIENDS_REQUEST:
            return{
                ...state,
                request: true
            }
        case GET_FRIENDS_SUCCESS:
            return{
                ...state,
                friends: action.payload,
                request: false
            }
        case GET_FRIENDS_FAIL:
            return{
                ...state,
                error: true,
                request: false
            }
        default:
            return state
    }
}