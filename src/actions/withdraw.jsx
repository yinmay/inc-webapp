import { ajax } from '../util' 

export const withdrawError = (data) => ({type: 'WITHDRAW/ERROR', data})
export const withdrawRequesting = (data) => ({type: 'WITHDRAW/REQUESTING', data})
export const withdrawRecord = (data) => ({type: 'WITHDRAW/RECORD', data})
export const withdrawWalletAddr = (data) => ({type: 'WITHDRAW/WALLETADDR', data})

export function getWithdrawRecord(data) {
  return (dispatch) => {
    dispatch(withdrawRequesting(true))
    ajax('/withdraw/record', 'GET', data).then(res => { 
      if (res.hasError) { 
        dispatch(withdrawError(res)) 
      } else { 
        dispatch(withdrawRecord(res)) 
      } 
      dispatch(withdrawRequesting(false)) 
    })
  }
}


export function withdrawConfirm(data) {
  return (dispatch) => {
    dispatch(withdrawRequesting(true))
    ajax('/withdraw/comfirm', 'POST', data).then(res => {
        if (res.hasError) { 
            dispatch(withdrawError(res))
        }
        dispatch(withdrawRequesting(false))
    })
  }
}

export function withdrawWalletAdd(data) {
  return (dispatch) => {
    dispatch(withdrawRequesting(true))
    ajax('/withdraw/wallet/add', 'POST', data).then(res => {
        if (res.hasError) { 
            dispatch(withdrawError(res))
        }
        dispatch(withdrawRequesting(false))
    })
  }
}

export function setDefaultWallet(data) {
  return (dispatch) => {
    dispatch(withdrawRequesting(true))
    ajax('/withdraw/wallet/set_default', 'POST', data).then(res => {
        if (res.hasError) { 
            dispatch(withdrawError(res))
        }
        dispatch(withdrawRequesting(false))
    })
  }
}
export function removeWallet(data) {
  return (dispatch) => {
    dispatch(withdrawRequesting(true))
    ajax('/withdraw/wallet/remove', 'POST', data).then(res => {
        if (res.hasError) { 
            dispatch(withdrawError(res))
        }
        dispatch(withdrawRequesting(false))
    })
  }
}
//获取当前用户的提现地址
export function getWalletAddr(data) {
  return (dispatch) => {
    dispatch(withdrawRequesting(true))
    ajax('/withdraw/wallet/','GET',data).then(res => {
      if(res.hasError){
        dispatch(withdrawError(res))
      } else {
        dispatch(withdrawWalletAddr(res))
      }
      dispatch(withdrawRequesting(false))
    })
  }
}