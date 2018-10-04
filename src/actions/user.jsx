import { ajax } from '../util' 

export const userError = (data) => ({type: 'USER/ERROR', data})
export const userRequesting = (data) => ({type: 'USER/REQUESTING', data})
export const userAmount = (data) => ({type: 'USER/AMOUNT', data})
export const userDepositRecord = (data) => ({type: 'USER/DEPOSIT/RECORD', data})
export const userDepositAddr = (data) => ({type: 'USER/DEPOSIT/ADDR', data})

// 用户余额
export function getUserAmount(data) {
  return (dispatch) => {
    dispatch(userRequesting(true))
    ajax('/user/amount', 'GET', data).then(res => {
        if (res.hasError) { 
            dispatch(userError(res[Object.keys(res)[0]]))
        } else {
            dispatch(userAmount(res))
        }
        dispatch(userRequesting(false))
    })
  }
}

// 用户充值记录
export function getUserDepositRecord(data) {
  return (dispatch) => {
    dispatch(userRequesting(true))
    ajax('/user/deposit/record', 'GET', data).then(res => {
        if (res.hasError) { 
            dispatch(userError(res))
        } else {
            dispatch(userDepositRecord(res))
        }
        dispatch(userRequesting(false))
    })
  }
}

// 获取钱包地址
export function getUserDepositAddr(data) {
  return (dispatch) => {
    dispatch(userRequesting(true))
    ajax('/user/deposit_addr', 'GET', data).then(res => {
        if (res.hasError) { 
            console.log(res)
            dispatch(userError(res))
        } else {
            console.log(res)
            dispatch(userDepositAddr(res))
        }
        dispatch(userRequesting(false))
    })
  }
}