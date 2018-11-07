import React, { Component } from 'react'
import './background-page-member.scss'
import PropTypes from 'prop-types'

export default class BgPageMemberIntro extends Component {

  render () {

    return (
      <li className="member">

        <div className="member-set">


          <div className="member-img">


          </div>

          <div className="member-int">


            <div className="member-name">
              {this.props.name}
            </div>
            {this.props.title}
          </div>


        </div>

      </li>

    )
  }

}