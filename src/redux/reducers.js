import { combineReducers } from 'redux'

import {
  GET_INNER,
} from './action-types'

//inners：输入框获取的文字
function inners (state = '', action) {
  switch (action.type) {
    case GET_INNER:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  inners,
})