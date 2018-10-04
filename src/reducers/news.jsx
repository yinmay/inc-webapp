const initialState = {
    isLoading: false,
    error: '',
    detail: {},
    vote: {},

  }
  
  export const news = (state = initialState, action) => {
    switch (action.type) {
      case 'NEWS/REQUESTING':
          return {...state, isLoading: action.data}
  
      case 'NEWS/ERROR':
          return {...state, error: action.data}
  
      case 'NEWS/DETAIL':
          return {...state, detail: action.data}
  
      case 'NEWS/VOTE':
          return {...state, vote: action.data}
  
      default:
          return state
    }
  }