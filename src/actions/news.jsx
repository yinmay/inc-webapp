import { ajax } from '../util' 

// export const setNews=(data)=>{return {type:'SET/NEWS',data}}

export const newsError = (data) => ({type: 'NEWS/ERROR', data})
export const newsRequesting = (data) => ({type: 'NEWS/REQUESTING', data})
export const newsDetail = (data)=>({type:'NEWS/DETAIL',data})

export function getNewsDetail(data) {
    return (dispatch) => {
      dispatch(newsRequesting(true))
      ajax('/news', 'GET', data).then(res => {
          if (res.hasError) { 
              dispatch(newsError(res))
          } else {
              dispatch(newsDetail(res))
          }
          dispatch(newsRequesting(false))
      })
    }
  }


export function newsVote(data) {
    return (dispatch) => {
      dispatch(newsRequesting(true))
      return ajax('/news/vote', 'POST', data).then(res => {
          if (res.hasError) { 
              dispatch(newsError(res))
          } 
          dispatch(newsRequesting(false))
          return res
      })
    }
  }