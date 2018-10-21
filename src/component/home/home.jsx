import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './home.scss'
import { homeContent } from '../../rooter/rootTable'
import Header from './header/header'
import HomeContent from './homeContent/homeContent'


export default class Home extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path={homeContent} component={HomeContent}/>
          <Redirect to={homeContent}/>
        </Switch>
      </div>
    )
  }
}
