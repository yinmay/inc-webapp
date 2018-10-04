const initialState = {
  isLoading: false,
  error: '',
  amount: {},
  record: {},
  address: {},
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/REQUESTING':
        return {...state, isLoading: action.data}

    case 'USER/ERROR':
        return {...state, error: action.data}

    case 'USER/AMOUNT':
        return {...state, amount: action.data}

    case 'USER/DEPOSIT/RECORD':
        return {...state, record: action.data}

    case 'USER/DEPOSIT/ADDR':
        return {...state, address: action.data}

    default:
        return state
  }
}