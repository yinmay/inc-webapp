import { combineReducers } from 'redux'

import * as appReducers from './app'
import * as authReducers from './auth'
import * as userReducers from './user'
import * as playerReducers from './player'
import * as voteReducers from './vote'
import * as newsReducers from './news'
import * as withdrawReducers from './withdraw'


const reducers = { 
    ...appReducers,
    ...authReducers,
    ...userReducers,
    ...playerReducers,
    ...voteReducers,
    ...newsReducers,
    ...withdrawReducers,
}

export default combineReducers(reducers)
