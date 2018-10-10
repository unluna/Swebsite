/*
* 根组件，主干路由
* */
import React, { Component } from 'react'
import './public.scss'
import Baibai from './component/bai/baibai'

export default class App extends Component {
  render () {
    return (
      <ul className="" id="">
        <Baibai/>
      </ul>
    )
  }
}
