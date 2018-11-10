import React, { Component } from 'react'


import MainContent from './mainContent/mainContent'
import PhotoContent from './photoContent/photoContent'
import WebsiteContent from './websiteContent/websiteContent'

export default class HomeIndexContent extends Component {
  render () {
    return (
      <div>
        <div className={'cutOffLine'}/>
        <MainContent/>
        <PhotoContent/>
        <WebsiteContent/>
      </div>
    )
  }
}
