import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { sourceSend } from '../../../rooter/rootTable'
import SourceSend from './soueceSend/SourceSend'
export default class SourceR extends Component{
  render(){
    return(
      <Switch>
        <Route to={sourceSend} component={SourceSend}/>
        <Redirect to={sourceSend}/>
      </Switch>
    )
  }

}