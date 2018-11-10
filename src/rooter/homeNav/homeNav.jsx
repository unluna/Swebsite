import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './homeNav.scss'
import { homeContent } from '../../rooter/rootTable'

export default class HomeNav extends Component {
  render () {
    return (
      <div className={'nav-big-wrapper'}>
        <div className={'logo-wrapper'}>
          <div className={'logo-img'}/>
        </div>
        <ul className={'nav-wrapper'}>
          <NavLink to={homeContent}>
            <li>看看主页</li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>看看博客</li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>看看新闻</li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>看看收藏</li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>看看回复</li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>看看成员</li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>看看设置</li>
          </NavLink>
        </ul>
      </div>
    )
  }
}
