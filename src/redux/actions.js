import axios from 'axios/index'

import {
  GET_INNER,
} from './action-types'
//inner：获取搜索框的文字
export const getInner = (inner) => ({type: GET_INNER, data: inner})