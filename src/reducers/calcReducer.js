import * as actionTypes from '../constants/actionTypes'

const initialState = {
  history: [],
  current: {
    display: '',
    expression: '',
    result: '',
  },
}

const calc = (display, expression) => {
  try {
    return eval(expression).toString() // eslint-disable-line
  } catch (err) {
    return display
  }
}

const add = (state, payload) => {
  const { current } = state
  const { label, value } = payload

  const display = `${current.display}${label}`
  const expression = `${current.expression}${value}`
  const result = calc(display, expression)

  return {
    ...state,
    current: {
      display,
      expression,
      result,
    },
  }
}

const equal = (state) => {
  const { current, history } = state

  const display = current.result
  const expression = current.result
  const result = ''

  return {
    history: [...history, current],
    current: {
      display,
      expression,
      result,
    },
  }
}

const del = (state, payload) => {
  const { current } = state

  const display = current.display.slice(0, -1)
  const expression = current.expression.slice(0, -1)
  const result = calc(display, expression)

  return {
    ...state,
    current: {
      display,
      expression,
      result,
    },
  }
}

const calcReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actionTypes.ADD:
      return add(state, payload)
    case actionTypes.EQU:
      return equal(state, payload)
    case actionTypes.DEL:
      return del(state)
    default:
     return state
  }
}

export default calcReducer

export const getHistory = (state) => state.calc.history
export const getCurrent = (state) => state.calc.current
