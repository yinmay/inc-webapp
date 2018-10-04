const initialState = {
  user_id: localStorage.getItem('userId') || '',
  jwt_token: localStorage.getItem('token') || '',
  open_uid: '',
  auth_service: '', 
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUESTING':
      return {...state, isLoading: action.data}

    case 'AUTH_ERROR':
      return {...state, error: action.data}

    case 'USER_INFO':
      return {...state, ...action.data}

    default:
        return state
  }
}