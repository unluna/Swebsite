import { combineReducers } from 'redux'

import {
  GET_INNER,
  MEMBER_BACKGROUND,
  MEMBER_FONTEND,
  MEMBER_GAME
} from './action-types'

//inners：输入框获取的文字
function inners (state = '', action) {
  switch (action.type) {     //action.js每定义一个方法，下面会有两个东西 1类型 2数据   数据会返给reducers  .type方法携带data数据
    case GET_INNER:
      return action.data
    default:
      return state
  }
}

//fontendM获取成员信息
function fontendM (state='',action) {
  switch (action.type) {
    case MEMBER_FONTEND:
      return action.data
    default:
      return state

  }

}
//backgroundM获取成员信息
function backgroundGetM (state=[
  {
    name: 'aaa',
    title: 'awdaaaaaaa'

  },

],action) {
  switch (action.type) {
    case MEMBER_BACKGROUND:
      return action.data
    default:
      return state

  }

}
//gameM获取成员信息
function gameM (state='',action) {
  switch (action.type) {
    case MEMBER_GAME:
      return action.data
    default:
      return state

  }

}
export default combineReducers({
  inners,backgroundGetM
})

