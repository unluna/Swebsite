import React from 'react'
import './SourceNav.scss'
import { connect } from 'react-redux'
import { changeSourceNavState, frontStart } from './../../redux/actions'

class SourceNav extends React.Component {
  state = {
    list: []
  }
  nav = () => {
    const choose = this.props.goToSourceNav
    let list = document.querySelectorAll('.navFlex li')
    console.log(list)
    for (let i = 0; i < 7; i++) {
      if (list[i].className !== choose) {
        list[i].id = 'not'
      }
      else {
        list[i].className = choose
        list[i].id = 'choose'
      }
    }
  }
  changeToFront = () => {

    this.props.changeSourceNavState('front')
    console.log(this.props.goToSourceNav)
  }
  changeToBackStage = () => {
    this.props.changeSourceNavState('backStage')
    console.log(this.props.goToSourceNav)
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

  componentDidMount () {
    this.nav()
    this.setState = {
      lists: document.querySelectorAll('.navFlex li')
    }
  }

  render () {
    let state = this.props.goToSourceNav
    console.log(state)

    return (
      <div className="SourceHomeNav">
        <div className="navFlex">
          <ul>
            <li className={'front'} onClick={this.changeToFront}>前端</li>
            <li className={'backStage'} onClick={this.changeToBackStage}>后台</li>
            <li className={'safe'} onClick={this.changeToSafe}>网安</li>
            <li className={'algorithm'} onClick={this.changeToAlgorithm}>算法</li>
            <li className={'ui'} onClick={this.changeToUi}>美工</li>
            <li className={'teacher'} onClick={this.changeToTeacher}>教师</li>
            <li className={'other'} onClick={this.changeToOther}>其它</li>
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