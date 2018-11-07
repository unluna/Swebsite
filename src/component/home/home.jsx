import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './home.scss'
import Header from './header/header'
import { homeContent, background, fontEnd, game, advertHome,sourceR } from '../../rooter/rootTable'
import HomeContent from './homeContent/homeContent'
import SourceR from './source/sourceR'
import AdvertHome from './advert/advertHome'
export default class Home extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path={homeContent} component={HomeContent}/>
          <Route path={sourceR} component={SourceR}/>
          <Route path={advertHome} component={AdvertHome}/>
          <Redirect to={homeContent}/>
        </Switch>
      </div>
    )
  }
}