import * as actionTypes from '../constants/actionTypes'

const initialState = {
  title: '',
  history: false,
}

const uiReducer = (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.TOGGLE_HISTORY:
      return {
        ...state,
        title: !state.history ? 'History' : '',
        history: !state.history,
      }
    default:
      return state
  }
}

export default uiReducer

export const getTitle = (state) => state.ui.title
export const getHistory = (state) => state.ui.history
