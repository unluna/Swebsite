import React, { Component } from 'react'
import './SourceContainer.scss'
import SourceHotPoint from './K-SouceHotPoint/SourceHotPoint'
import SourceNoteDiv from './K-SourceNoteDiv/SourceNoteDiv'
import { connect } from 'react-redux'
import { changeSourceNavState, frontStart,  setOut, setTimeOut } from '../../../../../redux/actions'

class SourceContainer extends Component {
  /*data = [
    {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: 'hh'
    }, {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: 'rrr'
    }, {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: 'qqq'
    }, {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: 'eee'
    }, {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: '。'
    }, {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: ''
    }, {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: ''
    }, {
      name: '阿拉斯加上课',
      title: '我的祖国',
      contener: ''
    }
  ]*/
  componentDidMount () {
    this.props.setOut()
  }

  render () {
    const data = this.props.setTime
    const dataLast= this.props.setText
    return (
      <div className="container">
        <SourceHotPoint/>

        {
          data.map((name, index) => {
            return (
              <SourceNoteDiv key={index} name={name.name} title={name.title} content={name.contener}/>
            )
          })
        }

      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  goToSourceNav: state.goToSourceNav,
  setTime: state.setTime,
  setText:state.setText
})
export default connect(mapStateToProps, {
  changeSourceNavState,
  frontStart,
  setTimeOut,
  setOut
})(SourceContainer)