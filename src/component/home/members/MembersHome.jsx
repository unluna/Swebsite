import React, { Component } from 'react'
import MembersItem from './MembersItem/MembersItem'
import HomeNav from '../homeContent/homeNav/homeNav'
import HomeNavContent from '../homeContent/homeNavContent/homeNavContent'
import './MembersHome.scss'
import { members, } from '../../../redux/actions'
import { connect } from 'react-redux'
 class MembersHome extends Component {
  /*data = [{
    grade2017: [
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
    ]
  }, {
    grade2016: [
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
    ]
  }, {
    grade2015: [
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
      {name: '网工二班牛鬼蛇神'},
    ]
  }
  ]*/
  componentDidMount(){
  this.props.members()
}

  render () {
const info=this.props.getMembers
    //console.log(info)
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