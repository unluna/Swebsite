import React ,{Component}from 'react'
import './SourceSend.scss'
import { NavLink } from 'react-router-dom'
import { sourceSendHome } from '../rootTable'

export default class SourceSend extends Component {
  render () {
    return (
      <NavLink to={sourceSendHome}>
      <div className="suspensionWindow">
        发布
      </div>
      </NavLink>
    )
  }
}