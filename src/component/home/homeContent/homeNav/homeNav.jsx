import React, { Component } from 'react'

import './homeNav.scss'

export default class HomeNav extends Component {
  render () {
    return (
      <div className={'nav-big-wrapper'}>
        <div className={'logo-wrapper'}>
          <div className={'logo-img'}/>
        </div>
        <ul className={'nav-wrapper'}>
          <li>看看博客</li>
          <li>看看公告</li>
          <li>看看新闻</li>
          <li>看看收藏</li>
          <li>看看回复</li>
          <li>看看成员</li>
          <li>看看设置</li>
        </ul>
      </div>
    )
  }
}
