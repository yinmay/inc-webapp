const initialState = {
  showVoteModal: false, 
  showRuleModal: false, 
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case 'APP/VOTE_MODAL':
        return {...state, showVoteModal: action.data}

    case 'APP/RULE_MODAL':
        return {...state, showRuleModal: action.data}

    default:
        return state
  }
}