const initialState = {
  isLoading: false,
  error: '',
  record: {} ,
  walletAddr:[]
}

export const withdraw = (state = initialState, action) => {
  switch (action.type) {
    case 'WITHDRAW/REQUESTING':
        return {...state, isLoading: action.data}

    case 'WITHDRAW/ERROR':
        return {...state, error: action.data}

    case 'WITHDRAW/RECORD':
        return {...state, record: action.data}

    case 'WITHDRAW/WALLETADDR':
        return {...state, walletAddr: action.data}
    default:
        return state
  }
}
