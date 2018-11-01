import React, { Component } from 'react'
import './font-end.scss'
import FontEndHead from './font-end-head/font-end-head';
import PageMainTop from './font-end-mainTop/font-end-mainTop';
import PageMainCenter from './font-endCenter/font-endCenter';
import PageMember from './font-end-page-member/font-end-page-member';
import FontEndJoinus from './font-end-joinus/font-end-joinus';

export default class FontEnd extends Component {


  render () {
    return (
      <div>
        <FontEndHead />
        <PageMainTop />
        <PageMainCenter />
        <PageMember />
        <FontEndJoinus />
      </div>
    )
  }
}