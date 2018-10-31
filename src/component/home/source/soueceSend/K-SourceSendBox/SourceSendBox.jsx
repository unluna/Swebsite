import React from 'react'
// import SourceSendBoxCount from './sourceSendCount/SourceSendBoxCount'
import './SourceSendBox.scss'

export default class SourceSendBox extends React.Component {
  state = {
    inners: '',
    innersNum: 0,
  }

  change = (event) => {
    const {inners, innersNum} = this.state
    this.setState({
      inners: event.target.value,
      innersNum: inners.toString().length,

    })
  }

  render () {
    const {inners,innersNum} = this.state
    console.log(inners)
    console.log(innersNum)
    return (
      <div className="box">
        <div className="box-login">
          <div className="box-textArea">
            <div className="title">
                            <textarea
                              placeholder="请输入标题" maxLength="1000"/></div>
            <div className="text">
                <textarea
                  placeholder="发点啥？(少于1000字符)" id="boxTextarea"
                  onChange={this.change} value={inners}/>
              <p>{this.state.num}</p></div>

          </div>
          <div className="box-info">
            <div className="box-operate">
              <b>阿拉斯加上课</b>
              <span className="box-operate-line">|</span>
            </div>
            <div className="box-commentBtn">
              <button className="iconfonticon-information-delivery">
                <div className="button"><span>发布</span></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}