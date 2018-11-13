import React, { Component } from 'react'
import MembersItem from './MembersItem/MembersItem'
import HomeNav from '../homeContent/homeNav/homeNav'
import HomeNavContent from '../homeContent/homeNavContent/homeNavContent'
import './MembersHome.scss'
import { members, } from '../../../redux/actions'
import { connect } from 'react-redux'
 class MembersHome extends Component {
  componentWillMount(){
  this.props.members()
}

  render () {
    //ggg
const info=this.props.getMembers
    return (
      <div>
        <HomeNav/>
        <HomeNavContent/>
        <div className={'cutOffLine'}/>
        <div className={'outerFrame'}>
          <div>
            <MembersItem info={info}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  getMembers:state.getMembers
})
export default connect(mapStateToProps, {
members
})(MembersHome)