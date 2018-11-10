import React, { Component } from 'react'

import './homeContent.scss'
import HomeNav from '../../../rooter/homeNav/homeNav'
import HomeNavContent from './homeNavContent/homeNavContent'
import HomeIndexContent from './B_homeIndexContent/homeIndexContent'

export default class HomeContent extends Component {
  render () {
    return (
      <main className={'B_main'}>
        <HomeNav/>
        <HomeNavContent/>
        <HomeIndexContent/>
      </main>
    )
  }
}