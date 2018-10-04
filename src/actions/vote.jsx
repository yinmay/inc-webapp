import { ajax } from '../util' 

export const voteError = (data) => ({type: 'VOTE/ERROR', data})
export const voteRequesting = (data) => ({type: 'VOTE/REQUESTING', data})
export const currentVote = (data) => ({type: 'VOTE/CURRENT', data})
export const voteUnfinishedRecord = (data) => ({type: 'VOTE/UNFINISHEDRECORD', data})
export const voteFinishedRecord = (data) => ({type: 'VOTE/FINISHEDRECORD', data})

// 正在进行的投票 
export function getCurrentVote(data) {
  return (dispatch) => {
    dispatch(voteRequesting(true))
    return ajax('/vote_management/current_activity_web', 'GET', data).then(res => {
        if (res.hasError) { 
            dispatch(voteError(res))
        } else {
            dispatch(currentVote(res))
        }
        dispatch(voteRequesting(false))

        return res
    })
  }
}

// 投票 
export function vote(data) {
  return (dispatch) => {
    dispatch(voteRequesting(true))
    return ajax('/vote_management/vote', 'POST', data).then(res => {
        if (res.hasError) { 
            dispatch(voteError(res.error))
        }

        dispatch(voteRequesting(false))
        return res
    })
  }
}

// 投票记录(未开奖)
export function getVoteUnfinishedRecord(data) {
  return (dispatch) => {
    dispatch(voteRequesting(true))
    ajax('/vote_management/vote/record?settled=false', 'GET', data).then(res => {
        if (res.hasError) { 
            dispatch(voteError(res))
        } else {
            dispatch(voteUnfinishedRecord(res))
        }
        dispatch(voteRequesting(false))
    })
  }
}
// 投票记录(已开奖)
export function getVoteFinishedRecord(data) {
  return (dispatch) => {
    dispatch(voteRequesting(true))
    ajax('/vote_management/vote/record?settled=true', 'GET', data).then(res => {
        if (res.hasError) { 
            dispatch(voteError(res))
        } else {
            dispatch(voteFinishedRecord(res))
        }
        dispatch(voteRequesting(false))
    })
  }
}