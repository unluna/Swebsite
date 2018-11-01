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
          <div className={'header-logo'} >
            <div className={'header-logo-img'} onClick={this.onChangeNavTop}/>
            <h1>数据科协</h1>
          </div>
          <Navigation getNav={this.getNav} ChangeNavTop={this.onChangeNavTop}/>
          <div className={'header-sign-wrapper'}>
            <div className={'icon-user'}/>
            <h1>登录</h1>
          </div>
        </section>
      </header>
    )
  }
}
