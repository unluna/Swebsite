import React from 'react'
import './background-page-member.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BgPageMemberIntro from '../backgroundMemberItem/backgroundMemberItem.jsx'
import {AjaxBackground} from '../../../../redux/actions'

class BgPageMember extends React.Component {


  render () {
    this.props.AjaxBackground()
    const {backgroundGetM} = this.props
    return (
      <div className="page-member">
        <div className="page-member-set">
          <div className="page-left-part">
            <div className="left-top">
              <div className="left-img">

              </div>
              <div className="left-top-int">
                sdddddddd
                sdddddddddddddddddddd
                sddddddddddddddddddddd
                sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd

              </div>
            </div>
            <div className="left-button">
              <div className="left-img">

              </div>
              <div className="left-button-int">
                sdddddddd
                sdddddddddddddddddddd
                sddddddddddddddddddddd
                sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd

              </div>
            </div>

          </div>

          <div className="page-right-part">
            <ul>
              {
                backgroundGetM.map((into, index) => {
                  return (<BgPageMemberIntro key={index} name={into.name} title={into.title}/>)
                })

              }


            </ul>

          </div>


        </div>

      </div>
    )

  }
}

BgPageMember.propTypes = {
  backgroundGetM: PropTypes.array.isRequired,
}

const mapBackgroundMap = (state) => ({
  backgroundGetM: state.backgroundGetM,
})
//
export default connect(
  mapBackgroundMap,
  {AjaxBackground}
)(BgPageMember)