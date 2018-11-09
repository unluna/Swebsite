import React ,{Component}from 'react'
import './SourceSend.scss'
import { NavLink } from 'react-router-dom'
import { sourceSendHome } from '../rootTable'
import { connect } from 'react-redux'
 class SourceSend extends Component {
  render () {
    return (
      <NavLink to={sourceSendHome}>
      <div className="suspensionWindow" onClick={this.send}>
        发布
      </div>
      </NavLink>
    )
  }
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {
})(SourceSend)