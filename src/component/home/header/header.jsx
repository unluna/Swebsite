import React, { Component } from 'react'
import axios from 'axios'

import './header.scss'

export default class Header extends Component {

  onChangeAsideTop = () => {
    // console.log(this.aside.style.top)
    if(this.aside.style.top === `-460px`){
      this.aside.style.top = 60 + 'px'
    } else {
      this.aside.style.top = -460 + 'px'
    }

  }

  render () {
    return (
      <div>
        <header>
          <div className={'header-nav-btn'} onClick={this.onChangeAsideTop}/>
          <section className={'header-wrapper'}>
            <div className={'header-logo'}>
              <div className={'header-logo-img'}/>
              <h1>数据科协</h1>
            </div>
            <div className={'header-aside'}>
              <div className={'header-write-wrapper'}>
                <div className={'icon-blog'}/>
                <h1>写博客</h1>
              </div>
              <div className={'header-write-wrapper'}>
                <div className={'icon-upload2'}/>
                <h1>发资源</h1>
              </div>
              <div className={'header-write-wrapper'}>
                <div className={'icon-user'}/>
                <h1>登录</h1>
              </div>
            </div>
          </section>
        </header>
        <aside ref={aside => this.aside = aside}>
          <ul>
            <li>
              <div className={'icon-lock'}/>
              <h1>教师</h1>
            </li>
            <li>
              <div className={'icon-lock'}/>
              <h1>前端</h1>
            </li>
            <li>
              <div className={'icon-lock'}/>
              <h1>后台</h1>
            </li>
            <li>
              <div className={'icon-lock'}/>
              <h1>美术</h1>
            </li>
            <li>
              <div className={'icon-lock'}/>
              <h1>安全</h1>
            </li>
            <li>
              <div className={'icon-lock'}/>
              <h1>宣传</h1>
            </li>
            <li>
              <div className={'icon-lock'}/>
              <h1>游戏</h1>
            </li>
            <li>
              <div className={'icon-lock'}/>
              <h1>资源</h1>
            </li>
          </ul>
        </aside>
      </div>
    )
  }
}
