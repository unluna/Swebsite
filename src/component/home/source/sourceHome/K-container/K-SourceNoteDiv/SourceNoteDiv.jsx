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
                <div className={'img'}> </div>
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
