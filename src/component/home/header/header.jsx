import React, { Component } from 'react'

import './header.scss'
import Navigation from '../../../rooter/navigation/navigation'

export default class Header extends Component {

  state = {
    aside: '',
  }

  onChangeNavTop = () => {
    let {aside} = this.state
    if (aside.style.top === `-380px` || aside.style.top === '') {
      aside.style.top = 60 + 'px'
    } else {
      aside.style.top = -380 + 'px'
    }
  }

  getNav = (dom) => {
    const aside = dom
    this.setState({aside})
  }

  render () {
    return (
      <header className={'B_header'}>
        <section className={'header-wrapper'}>
          <div className={'header-logo'} onClick={this.onChangeNavTop}>
            <div className={'header-logo-img'}/>
            <h1>数据科协</h1>
          </div>
          <Navigation getNav={this.getNav} ChangeNavTop={this.onChangeNavTop}/>
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
    )
  }
}
