//根组件
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import sourceR from '../component/home/source/sourceR'
import Home from '../component/home/home'
import '../common.scss'
import { home } from './rootTable'


export default class App extends Component {

  render () {
    return (
      <div className={'app'}>
        <Switch>
          <Route path={home} component={Home}/>
          <Redirect to={home}/>
        </Switch>
      </div>
    )
  }
}
