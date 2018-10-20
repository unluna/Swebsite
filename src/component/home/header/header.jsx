import React, { Component } from 'react'

import './header.scss'

export default class Header extends Component {
  render () {
    return (
      <div>
        <header>
          <div className={'header-nav-btn'} />
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
        <aside>
          <ul>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
        </aside>
      </div>
    )
  }
}
