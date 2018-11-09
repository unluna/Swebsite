import { combineReducers } from 'redux'

import {
  CHANGE_SOURCENAV_STATE,
  GET_INNER, FRONT_REQUEST_START, CHANGE_ITEM,
  SET_TIME, SEND_TEXT
} from './action-types'

//inners：输入框获取的文字
function inners (state = '', action) {
  switch (action.type) {
    //action{type,data数据名}
    case GET_INNER:
      return action.data
    default:
      return state
  }
}

//点击切换SourceNav的状态
function goToSourceNav (state = 'front', action) {
  switch (action.type) {
    case CHANGE_SOURCENAV_STATE:
      return action.data
    default:
      return state
  }
}
function getItems (state=[],action) {
  switch(action.type){
    case CHANGE_ITEM:
      return action.data;
    default:
      return state;
  }
}
function setTime (state=[],action) {
  switch (action.type){
    case SET_TIME:
      return action.data
    default:
      return state
  }
}
function sendText (state='A',action) {
  switch (action.type){
    case SEND_TEXT:
      return action.data;
    default:
      return state
  }
}
export default combineReducers({
  inners,
  goToSourceNav,
  getItems,
  setTime,
  sendText,
})