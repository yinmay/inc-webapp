import { ajax } from '../util'

export const playerError = (data) => ({ type: 'PLAYER/ERROR', data })
export const playerRequesting = (data) => ({ type: 'PLAYER/REQUESTING', data })
export const playerList = (data) => ({ type: 'PLAYER/LIST', data })
export const playerInfo = (data) => ({ type: 'PLAYER/INFO', data })
export const playerHonor = (data) => ({ type: 'PLAYER/HONOR', data })
export const playerMatch = (data) => ({ type: 'PLAYER/MATCH', data })
export const playerInfluence = (data) => ({ type: 'PLAYER/INFLUENCE', data })
export const playerNews = (data) => ({ type: 'PLAYER/NEWS', data })
export const playerRecord = (data) => ({ type: 'PLAYER/RECORD', data })
export const playerStat = (data) => ({ type: 'PLAYER/STAT', data })
export const playerTransfer = (data) => ({ type: 'PLAYER/TRANSFER', data })
export const playerNewsHistogram = (data) => ({ type: 'PLAYER/NEWSHISTOR', data })
export const playerSocialTrending = (data) => ({ type: 'PLAYER/SOCIAL', data })




export function getPlayerList() {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player', 'GET').then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerList(res))
            }
            dispatch(playerRequesting(false))
        })
    }
}

export function getPlayerInfo(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player/basic', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerInfo(res[0]))
            }
            dispatch(playerRequesting(false))
        })
    }
}

export function getPlayerHonor(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player/honor', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerHonor(res))
            }
            dispatch(playerRequesting(false))
        })
    }
}

export function getPlayerMatch(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player/important_match', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerMatch(res))
            }
            dispatch(playerRequesting(false))
        })
    }
}

export function getPlayerInfluence(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        return ajax('/player/influence', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerInfluence(res))
            }
            dispatch(playerRequesting(false))

            return res
        })
    }
}

export function getPlayerNews(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player/news', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerNews(res))
            }
            dispatch(playerRequesting(false))
        })
    }
}

export function getPlayerRecord(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player/record', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerRecord(res))
            }
            dispatch(playerRequesting(false))
        })
    }
}

export function getPlayerStat(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player/statistics', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerStat(res))
            }
            dispatch(playerRequesting(false))
        })
    }
}

export function getPlayerTransfer(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        ajax('/player/transfer', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerTransfer(res))
            }
            dispatch(playerRequesting(false))
        })
    }
}
export function getPlayerSocialTrending(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        return ajax('/player/social_trending', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerSocialTrending(res))
            }
            dispatch(playerRequesting(false))
            return res
        })
    }
}

export function getPlayerNewsHistogram(data) {
    return (dispatch) => {
        dispatch(playerRequesting(true))
        return ajax('/player/news_histogram', 'GET', data).then(res => {
            if (res.hasError) {
                dispatch(playerError(res))
            } else {
                dispatch(playerNewsHistogram(res))
            }
            dispatch(playerRequesting(false))
            return res
        })
    }
}
