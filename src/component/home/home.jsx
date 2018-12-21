import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './home.scss'
import Header from './header/header'
import { homeContent, background, fontEnd, game, advertHome, sourceR, members, response } from '../../rooter/rootTable'
import HomeContent from './homeContent/homeContent'
import SourceR from './source/sourceR'
import Background from './background/background'
import FontEnd from './font-end/font-end'
import Game from './game/game'
import AdvertHome from './advert/advertHome'
//import MembersHome from './members/MembersHome'
import responseHome from './response/responseHome'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path={homeContent} component={HomeContent}/>
          <Route path={sourceR} component={SourceR}/>
          <Route path={background} component={Background}/>
          <Route path={fontEnd} component={FontEnd}/>
          <Route path={game} component={Game}/>
          <Route path={advertHome} component={AdvertHome}/>
          <Route path={response} component={responseHome}/>
          <Redirect to={homeContent}/>
        </Switch>
      </div>
    )
  }
}