import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAIL} from '../types'

export function handleLogin() {
    return function(dispatch) {
      dispatch({
        type: LOGIN_REQUEST
      })
  
      //eslint-disable-next-line no-undef
      VK.Auth.login(r => {
        if (r.session) {
          let username = r.session.user.first_name
          
          dispatch({
            type: LOGIN_SUCCESS,
            payload: username
          })
          } else {
          dispatch({
            type: LOGIN_FAIL,
            payload: new Error('Ошибка авторизации')
          })
        }
      }, 6)
    }
  }