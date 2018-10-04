const initialState = {
  isLoading: false,
  error: '',
  list: [],
  info: {},
  honor: {},
  match: {},
  influence: {},
  news: {
    data: []
  },
  record: {},
  stat: {
    keys: [],
    list: [],
  },
  transfer: {},
  newshistogram:{},
  social:{}
}

export const player = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER/REQUESTING':
        return {...state, isLoading: action.data}

    case 'PLAYER/ERROR':
        return {...state, error: action.data}

    case 'PLAYER/LIST':
        return {...state, list: action.data}

    case 'PLAYER/INFO':
        return {...state, info: action.data}

    case 'PLAYER/HONOR':
        return {...state, honor: action.data}

    case 'PLAYER/MATCH':
        return {...state, match: action.data}

    case 'PLAYER/INFLUENCE':
        return {...state, influence: action.data}

    case 'PLAYER/NEWS':
        return {...state, news: action.data}

    case 'PLAYER/RECORD':
        return {...state, record: action.data}

    case 'PLAYER/STAT':
        return {
          ...state, 
          stat: {
            keys: action.data.map((item) => Object.keys(item)[0]),
            list: action.data.map((item) => item[Object.keys(item)[0]])
          }
        }

    case 'PLAYER/TRANSFER':
        return {...state, transfer: action.data}

    case 'PLAYER/NEWSHISTOR':
        return {...state, newshistogram: action.data}

    case 'PLAYER/SOCIAL':
        return {...state, social: action.data}

    default:
        return state
  }
}