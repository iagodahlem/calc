import { combineReducers } from 'redux'
import calcReducer from './calcReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  calc: calcReducer,
  ui: uiReducer,
})

export default rootReducer
