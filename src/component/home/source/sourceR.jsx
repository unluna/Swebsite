import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { sourceSendHome, sourceHome } from '../../../rooter/rootTable'
import SourceSendHome from './sourceSendHome/SourceSendHome'
import SourceHome from './sourceHome/SourceHome'

export default class SourceR extends Component {
  render () {
    return (
      <Switch>
        <Route  path={sourceHome} component={SourceHome}/>
        <Route  path={sourceSendHome} component={SourceSendHome}/>
        <Redirect to={sourceHome} />
      </Switch>
    )
  }

}