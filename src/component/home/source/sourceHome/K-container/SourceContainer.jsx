import React, { Component } from 'react'
import './SourceContainer.scss'
import SourceHotPoint from './K-SouceHotPoint/SourceHotPoint'
import SourceNoteDiv from './K-SourceNoteDiv/SourceNoteDiv'
import { connect } from 'react-redux'
import { changeSourceNavState, frontStart, setOut, setTimeOut ,getValue} from '../../../../../redux/actions'

class SourceContainer extends Component {
  componentDidMount () {
    this.props.setOut()
  }

  render () {
    const data = this.props.setTime
    const dataLast = this.props.setText
    const inners=this.props.inners
    return (
      <div className="container">
        <SourceHotPoint/>
        {
          data.map((name, index) => {
            return (
              <SourceNoteDiv key={index} num={index} name={name.name} title={name.title} content={name.contener} comment={name.comments} commenting={inners}/>
            )
          })
        }

      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  inners:state.inners,
  goToSourceNav: state.goToSourceNav,
  setTime: state.setTime,
  setText: state.setText
})
export default connect(mapStateToProps, {
  changeSourceNavState,
  frontStart,
  setTimeOut,
  setOut,
  getValue,
})(SourceContainer)