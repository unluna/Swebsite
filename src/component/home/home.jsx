import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './home.scss'
import Header from './header/header'
import { homeContent, background, fontEnd, game } from '../../rooter/rootTable'
import {sourceHome} from '../../rooter/rootTable'
import {sourceR} from '../../rooter/rootTable'
import HomeContent from './homeContent/homeContent'
import SourceHome from './source/sourceHome/SourceHome'
import SourceR from './source/sourceR'
import FontEnd from './font-end/font-end'
import Background from './background/background'
import Game from './game/game'
export default class Home extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path={homeContent} component={HomeContent}/>
          <Route path={sourceHome} component={SourceHome}/>
          <Route path={sourceR} component={SourceR}/>
          <Route path={fontEnd} component={FontEnd}/>
          <Route path={background} component={Background}/>
          <Route path={game} component={Game}/>
          <Redirect to={homeContent}/>
        </Switch>
      </div>
    )
  }
}