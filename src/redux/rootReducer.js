import {combineReducers} from 'redux';
import { authReducer } from './reducers/authReducer';
import { friendsReducer } from './reducers/friendsReducer';


export const rootReducer = combineReducers({
    auth: authReducer,
    friends: friendsReducer
})