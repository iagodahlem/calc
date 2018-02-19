import * as actionTypes from '../constants/actionTypes'
import * as fromCalc from '../reducers/calcReducer'

export const calc = (type, label, value) => (dispatch, getState) => {
  const { display, expression, result } = fromCalc.getCurrent(getState())

  if (!value && (!display || !expression)) {
    return
  }

  if (type === actionTypes.EQU && display === result) {
    return
  }

  dispatch({
    type,
    payload: {
      label,
      value,
    },
  })
}
