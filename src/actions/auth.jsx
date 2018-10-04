import { ajax } from '../util' 
import history from '../history' 

export const authError = (data) => ({type: 'AUTH_ERROR', data})
export const authRequesting = (data) => ({type: 'AUTH_REQUESTING', data})
export const userInfo = (data) => ({type: 'USER_INFO', data})

export function login(data) {
    return (dispatch) => {
        dispatch(authRequesting(true))
        ajax('/user/inc_id_login', 'POST', data).then(res => {
            if (res.hasError) {
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
                dispatch(authError(res))
            } else {
                localStorage.setItem('userId', JSON.stringify(res.user_id))
                localStorage.setItem('token', res.jwt_token)
                dispatch(userInfo(res))
                history.push('/inc')
            }
            dispatch(authRequesting(false))
        })
    }
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        dispatch(userInfo({
            user_id: '',
            jwt_token: '',
            open_uid: '',
            auth_service: '', 
        }))
    }
}