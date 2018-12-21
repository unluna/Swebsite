import { combineReducers } from 'redux'

import {
  // GET_INNER,
  MEMBER_BACKGROUND,
  MEMBER_FONTEND,
  MEMBER_GAME,
  CHANGE_SOURCENAV_STATE,
  GET_INNER, FRONT_REQUEST_START, CHANGE_ITEM,
  SET_TIME,
  SEND_TEXT,
  GET_MEMBERS,
  MEMBERS_START
} from './action-types'


function inners (state = [{}], action) {
  switch (action.type) {
    case GET_INNER:
      return [...state,action.data]
    default:
      return state
  }
}

//fontendM获取成员信息
function fontendM (state = '', action) {
  switch (action.type) {
    case MEMBER_FONTEND:
      return action.data
    default:
      return state

  }

}

//backgroundM获取成员信息
function backgroundGetM (state = [
  {
    name: 'aaa',
    title: 'awdaaaaaaa'

  },

], action) {
  switch (action.type) {
    case MEMBER_BACKGROUND:
      return action.data
    default:
      return state

  }

}

//gameM获取成员信息
function gameM (state = '', action) {
  switch (action.type) {
    case MEMBER_GAME:
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

function getItems (state = [], action) {
  switch (action.type) {
    case CHANGE_ITEM:
      return action.data
    default:
      return state
  }
}

function setTime (state = [], action) {
  switch (action.type) {
    case SET_TIME:
      return action.data
    default:
      return state
  }
}

//发送到资源
function sendText (state = [{}], action) {
  switch (action.type) {
    case SEND_TEXT:
      return action.data
    default:
      return state
  }
}

function getMembers (state = [], action) {
  switch (action.type) {
    case GET_MEMBERS:
      return [...state, ...action.data]
    default:
      return state
  }
}

function membersStart (state = 'first', action) {
  switch (action.type) {
    case MEMBERS_START:
      return action.data
    default :
      return state
  }

}

export default combineReducers({
  inners, backgroundGetM,
  goToSourceNav,
  getItems,
  setTime,
  sendText,
  getMembers,
  membersStart
})

