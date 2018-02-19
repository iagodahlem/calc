import * as actionTypes from './actionTypes'

export const numerics = [
  { label: '7', action: actionTypes.ADD, value: '7' },
  { label: '8', action: actionTypes.ADD, value: '8' },
  { label: '9', action: actionTypes.ADD, value: '9' },
  { label: '4', action: actionTypes.ADD, value: '4' },
  { label: '5', action: actionTypes.ADD, value: '5' },
  { label: '6', action: actionTypes.ADD, value: '6' },
  { label: '1', action: actionTypes.ADD, value: '1' },
  { label: '2', action: actionTypes.ADD, value: '2' },
  { label: '3', action: actionTypes.ADD, value: '3' },
  { label: '.', action: actionTypes.ADD, value: '.' },
  { label: '0', action: actionTypes.ADD, value: '0' },
  { label: '=', action: actionTypes.EQU },
]

export const actions = [
  { label: 'DEL', action: actionTypes.DEL },
  { label: '÷', action: actionTypes.ADD, value: '/' },
  { label: '×', action: actionTypes.ADD, value: '*' },
  { label: '+', action: actionTypes.ADD, value: '+' },
  { label: '-', action: actionTypes.ADD, value: '-' },
  // { label: '%', action: actionTypes.ADD, value: '%' },
]
