import React, { Component } from 'react'
import './back.scss'
import BgTopTitle from './background-top-title/background-top-title.jsx';
import BgPageIntro from './background-page-intro/background-page-intro.jsx';
import BgPageMember from './background-page-member/background-page-member.jsx';
import BgPageResources from './background-page-resources/background-page-resources.jsx';

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