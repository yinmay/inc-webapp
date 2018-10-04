const initialState = {
  isLoading: false,
  error: '',
  current: {},
  unfinishedrecord: [],
  finishedrecord:[],
}

export const vote = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE/REQUESTING':
        return {...state, isLoading: action.data}

    case 'VOTE/ERROR':
        return {...state, error: action.data}

    case 'VOTE/CURRENT':
        return {...state, current: action.data}

    case 'VOTE/UNFINISHEDRECORD':
        return {...state, unfinishedrecord: action.data}

    case 'VOTE/FINISHEDRECORD':
        return {...state,finishedrecord: action.data}

    default:
        return state
  }
}