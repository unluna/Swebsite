import React from 'react'
import './SourceNav.scss'

export default class SourceNav extends React.Component {
  render () {
    return (
      <div className="SourceHomeNav">
        <div className="navFlex">
          <ul>
            <li><a href="">前端</a></li>
            <li><a href="">后台</a></li>
            <li><a href="">网安</a></li>
            <li><a href="">算法</a></li>
            <li><a href="">美工</a></li>
            <li><a href="">教师</a></li>
            <li><a href="">其它</a></li>
          </ul>
        </div>
      </div>
    )
  }
}