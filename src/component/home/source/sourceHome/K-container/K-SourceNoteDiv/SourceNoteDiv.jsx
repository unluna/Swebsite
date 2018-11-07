import React, { Component } from 'react'
import './SourceNoteDiv.scss'

export default class SourceNoteDiv extends Component {
  render () {
    return (
      <div className="listItem">
        <ul>
          <li>
            <div className="noteDiv">
              <h2 className="sourceName">{this.props.title}</h2>
              <div className="noteHeader">
                <img
                  src="//q1.qlogo.cn/g?b=qq&amp;k=69ZiaGbnRyupQTrvoWfRnsA&amp;s=40&amp;t=1510934400"
                  alt="头像" width="36" height="36"/>
                <span className="sender">{this.props.name}</span> <span className="time">2018-09-09</span>
              </div>
              <div className="textOut">
                <div className="text">
                  <p>{this.props.content}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
