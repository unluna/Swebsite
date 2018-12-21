import React, { Component } from 'react'
// import { Route, Switch, Redirect } from 'react-router-dom'
import SourceNav from '../../../../rooter/K-nav/SourceNav'
import SourceContainer from './K-container/SourceContainer'
import SourceSend from '../../../../rooter/K-send/SourceSend'
import './SourceHome.scss'

export default class SourceHome extends Component {


  render () {
    return (
      <div className="sourceHome">
        <SourceNav/>
        <SourceContainer/>
        <SourceSend/>
      </div>
    )
  }
}
