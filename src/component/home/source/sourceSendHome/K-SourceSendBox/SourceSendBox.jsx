import React from 'react'
// import SourceSendBoxCount from './sourceSendCount/SourceSendBoxCount'
import './SourceSendBox.scss'
import { send, sendContent } from '../../../../../redux/actions'
import { connect } from 'react-redux'

class SourceSendBox extends React.Component {
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
    this.props.send(inners)
  }
  click = () => {
    //this.props.send()
    const text = this.props.sendText
    console.log(text)
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

  /*  autoHeight = (obj) => {
      // let el=obj;
      setTimeout(
        () => {obj.style.text.cssText = 'height' + obj.scrollHeight + 'px'}, 0
      )
    }*/

  render () {
    //const send = () => this.props.send
    const {inners, innersNum} = this.state
    if ({innersNum} > 1000) {
      this.setState = {
        innersNum: 1000,
      }
      alert(innersNum)
    }
    /*console.log(inners)
    console.log(innersNum)*/
    return (
      <div className="box">
        <div className="box-login">
          <div className="box-textArea">
            <div className="Boxtitle"><textarea
              placeholder="请输入标题"/></div>
            <div className="SourceSendText">
              <textarea placeholder="发点啥？(少于1000字符)" id="boxTextarea" onChange={this.change} value={inners}
                        maxLength={1000}/>
            </div>
          </div>
          <div className={'Count'}><p>{innersNum}</p><p>/1000</p></div>
          <div className="box-info">
            <div className="box-operate">
              <b>阿拉斯加上课</b>
              <span className="box-operate-line">|</span>
            </div>
            <div className="box-commentBtn">
              <button className="iconfonticon-information-delivery">
                <div className="button"><span onClick={this.click}>发布</span></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sendText: state.sendText
})
export default connect(mapStateToProps, {
  send, sendContent
})(SourceSendBox)