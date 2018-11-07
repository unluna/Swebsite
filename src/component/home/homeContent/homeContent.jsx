import React, { Component } from 'react'

import './homeContent.scss'
import HomeNav from './homeNav/homeNav'
import HomeNavContent from './homeNavContent/homeNavContent'
import MainContent from './mainContent/mainContent'
import PhotoContent from './photoContent/photoContent'
import WebsiteContent from './websiteContent/websiteContent'

export default class HomeContent extends Component {
  render () {
    return (
      <main className={'B_main'}>
        <HomeNav/>
        <HomeNavContent/>
        <div className={'cutOffLine'}/>
        <MainContent/>
        <PhotoContent/>
        <WebsiteContent/>
      </main>
    )
  }
}