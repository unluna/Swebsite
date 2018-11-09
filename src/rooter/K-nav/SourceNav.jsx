import React from 'react'
import './SourceNav.scss'
import { connect } from 'react-redux'
import { changeSourceNavState, frontStart } from './../../redux/actions'

class SourceNav extends React.Component {

  changeToFront = () => {
    this.props.changeSourceNavState('front')
  }
  changeToBackStage = () => {
    this.props.changeSourceNavState('backStage')
  }
  changeToAlgorithm = () => {
    this.props.changeSourceNavState('algorithm')
  }
  changeToSafe = () => {
    this.props.changeSourceNavState('safe')
  }
  changeToUi = () => {
    this.props.changeSourceNavState('ui')
  }
  changeToTeacher = () => {
    this.props.changeSourceNavState('teacher')
  }
  changeToOther = () => {
    this.props.changeSourceNavState('other')
  }

  render () {
    return (
      <div className="SourceHomeNav">
        <div className="navFlex">
          <ul>
            <li><a href="" onClick={this.changeToFront}>前端</a></li>
            <li><a href="" onClick={this.changeToBackStage}>后台</a></li>
            <li><a href="" onClick={this.changeToSafe}>网安</a></li>
            <li><a href="" onClick={this.changeToAlgorithm}>算法</a></li>
            <li><a href="" onClick={this.changeToUi}>美工</a></li>
            <li><a href="" onClick={this.changeToTeacher}>教师</a></li>
            <li><a href="" onClick={this.changeToOther}>其它</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  goToSourceNav: state.goToSourceNav
})
export default connect(mapStateToProps, {changeSourceNavState, frontStart})(SourceNav)