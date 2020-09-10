import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from "../types"

const initialState = {
        username: '',
        error: '',
        autorize: false,
        request: false,
    }

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return{
                ...state,
                request: true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                username: action.payload,
                autorize: true,
                request: false
            }
        case LOGIN_FAIL:
            return{
                ...state,
                autorize: false,
                request: false,
                error: action.payload
            }
        default: return state
    }
}