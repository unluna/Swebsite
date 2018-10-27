import React from 'react'
// import SourceSendBoxCount from './sourceSendCount/SourceSendBoxCount'
import './SourceSendBox.scss'

export default class SourceSendBox extends React.Component {
  state = {
    input: 0,
    dNum: 0,
  }

  /*componentDidMount () {
    let textarea = (id) => document.getElementById(id)
    let count = (id) => {
      textarea(id).onchange = () => {
        const idValue = textarea(id).value
        let data1 = {
          num: parseInt(idValue.length),
        }
        data1.dNum = 1000 - data1.num
        this.setState = ({
          num: data1.num,
          dNum: data1.dNum
        })
        alert(this.setState.num + 'haha' + this.setState.dNum)
      }
    }
    count('boxTextarea')
  }*/
  onChange=()=>{
    let {input}=this.state
    this.setState({input})
  }

  render () {
    const {input}=this.state
    console.log('text',input)
    // const input=this.state.input
    return (
      <div className="box">
        <div className="box-login">
          <div className="box-textArea">
            <div className="title">
                            <textarea
                              placeholder="请输入标题" maxLength="1000"/></div>
            <div className="text">
                <textarea
                  placeholder="发点啥？(少于1000字符)" id="boxTextarea" onChange={this.onChange} ref={input=>this.input=input}/> <p>{this.state.num}</p></div>

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