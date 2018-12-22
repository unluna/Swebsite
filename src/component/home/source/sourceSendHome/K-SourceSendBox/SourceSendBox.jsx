import React from 'react'
import './SourceSendBox.scss'
import { send, sendContent } from '../../../../../redux/actions'
import { connect } from 'react-redux'

class SourceSendBox extends React.Component {
  state = {
    inners: '',
    innersNum: 0,
  }

  num=(event)=>{
    const {inners, innersNum} = this.state
    this.setState({
      inners: event.target.value,
      innersNum: inners.toString().length,
    })
  }
  change = (event) => {
    const {inners, innersNum} = this.state
    this.setState({
      inners: event.target.value,
      innersNum: inners.toString().length,
    })
    const node = this.refs.text
    node.style.height = 'auto'
    node.style.height = node.scrollHeight - 35.997 + 'px'
  }
  enter = (event) => {
    if(event.keyCode===13) {
      event.preventDefault()
    }
  }
  click = () => {
    const text = this.props.sendText
  }

  render () {
    const {inners, innersNum} = this.state
    if ({innersNum} > 1000) {
      this.setState = {
        innersNum: 1000,
      }
      alert(innersNum)
    }

    return (
      <div className="box">
        <div className="box-login">
          <div className="box-textArea">
            <div className="Boxtitle"><textarea
              placeholder="请输入标题(20字以内哟)" maxLength={20} ref={'title'} onKeyDown={this.enter}/></div>
            <div className="SourceSendText">
              <textarea rows={'1'} placeholder="发点啥？(少于1000字符)" id="boxTextarea" onChange={this.change}
                        onMouseUp={this.change}                onKeyUp={this.change}  value={inners} onMouseMove={this.num}
                        maxLength={1000} ref={'text'}/>
            </div>
          </div>
          <div className={'Count'}><p>{innersNum}</p><p>/1000</p></div>
          <div className="box-info">
            <div className="box-operate">
              <b>阿拉斯加上课</b>
              <span className="box-operate-line">|</span>
            </div>
            <div className="box-commentBtn">
              <button className="sendButton">
                <div className="button"><span onClick={this.click}>发布</span></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const
  mapStateToProps = (state) => ({
    sendText: state.sendText
  })
export default connect(mapStateToProps, {
  send, sendContent
})

(
  SourceSendBox
)