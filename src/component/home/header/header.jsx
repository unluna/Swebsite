import React, { Component } from 'react'

import './header.scss'
import Navigation from '../../../rooter/navigation/navigation'

export default class Header extends Component {

  state = {
    aside: '',
  }

  onChangeNavTop = () => {
    let {aside} = this.state
    if (aside.style.top === `-460px`) {
      aside.style.top = 60 + 'px'
    } else {
      aside.style.top = -460 + 'px'
    }
  }

  getNav = (dom) => {
    const aside = dom
    this.setState({aside})
  }

  render () {
    return (
      <div>
        <header>
          <div className={'header-nav-btn'} onClick={this.onChangeNavTop}/>
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
        <Navigation getNav={this.getNav}/>
      </div>
    )
  }
}
