import React, { Component } from 'react'

import './homeNavContent.scss'

export default class HomeNavContent extends Component {
  render () {
    return (
      <div className={'navContent-big-wrapper'}>
        <ul className={'logos-wrapper'}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className={'content-wrapper'}/>
      </div>
    )
  }
}
