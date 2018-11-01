import React, { Component } from 'react'
import './back.scss'
import BgTopTitle from './background-top-title/background-top-title';
import BgPageIntro from './background-page-intro/background-page-intro';
import BgPageMember from './background-page-member/background-page-member';
import BgPageResources from './background-page-resources/background-page-resources';

export default class Background extends Component {


  render () {
    return (
      <div>
        <BgTopTitle />
        <BgPageIntro />
        <BgPageMember />
        <BgPageResources />
      </div>
    )
  }
}