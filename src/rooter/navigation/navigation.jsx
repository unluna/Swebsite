import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.scss'
import { homeContent,sourceR,advertHome } from '../../rooter/rootTable'

export default class Navigation extends Component {

  componentDidMount () {
    this.props.getNav(this.aside)
  }

  render () {

    return (
      <aside ref={aside => this.aside = aside}>
        <ul>
          <NavLink to={homeContent} onClick={this.props.ChangeNavTop}>
            <li className={'aside-fst-child'}>
              <div className={'icon-lock'}/>
              <h1>教师</h1>
            </li>
          </NavLink>
          <NavLink to={advertHome} onClick={this.props.ChangeNavTop}>
            <li>
              <div className={'icon-lock'}/>
              <h1>宣传</h1>
            </li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>
              <div className={'icon-lock'}/>
              <h1>前端</h1>
            </li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>
              <div className={'icon-lock'}/>
              <h1>后台</h1>
            </li>
          </NavLink>
          <NavLink to={homeContent}>
            <li>
              <div className={'icon-lock'}/>
              <h1>UI</h1>
            </li>
          </NavLink>
          <NavLink to={homeContent} onClick={this.props.ChangeNavTop}>
            <li>
              <div className={'icon-lock'}/>
              <h1>安全</h1>
            </li>
          </NavLink>
          <NavLink to={homeContent} onClick={this.props.ChangeNavTop}>
            <li>
              <div className={'icon-lock'}/>
              <h1>游戏</h1>
            </li>
          </NavLink>
          <NavLink to={sourceR}>
            <li>
              <div className={'icon-lock'}/>
              <h1>资源</h1>
            </li>
          </NavLink>
        </ul>
      </aside>
    )
  }
}
