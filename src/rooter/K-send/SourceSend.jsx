import React ,{Component}from 'react'
import './SourceSend.scss'
import { NavLink } from 'react-router-dom'
import { sourceSend } from '../rootTable'

export default class SourceSendC extends Component {
  render () {
    return (
      <div className="suspensionWindow">
        <NavLink to={sourceSend}>发布</NavLink>
      </div>
    )
  }
}