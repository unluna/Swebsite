import React, { Component } from 'react'
import './SourceNoteDiv.scss'
import CommentsList from './commentsList/commentsList'
import { getValue } from '../../../../../../redux/actions'
import { connect } from 'react-redux'

class SourceNoteDiv extends Component {
  state = {
    num: 9,
    times: true,
    comments: [],
    key: this.props.num,
  }
  count = () => {
    if (this.state.times === true) {
      this.setState({
        num: ++this.state.num,
        times: false,
      })
    }
    else {
      this.setState({
        num: --this.state.num,
        times: true,
      })
    }
  }
  review = () => {
    let comm = this.refs.wrightComment
    comm.style.display = 'block'
  }
  pull = () => {
    let comm = this.refs.wrightComment
    comm.style.display = 'none'
  }
  click = (event) => {
    let val = this.refs.text
    let value = val.value
    const keyIndex = this.props.num
    if (value !== '') {
      let send = {
        num: keyIndex,
        inner: value,
      }
      this.props.getValue(send)
      val.value = ''
    }
    else {
      alert('空的你发个毛线啊')
    }

  }

  render () {
    const {num} = this.state
    const com = this.props.comment
    const inners = this.props.commenting

    return (
      <div className="listItem">
        <ul>
          <li>
            <div className="noteDiv">
              <h2 className="sourceName">{this.props.title}</h2>
              <div className="noteHeader">
                <div className={'img'}>

                </div>
                <span className="sender">{this.props.name}</span> <span className="time">2018-09-09</span>
              </div>
              <div className="textOut">
                <div className="text" onClick={this.pull}>
                  <p>{this.props.content}</p>
                </div>
                <div className={'sourceComment'}>
                  <div className={'commenting'}>

                    <div className={'comments'}>
                      <div className={'toDo'}>
                        <div className={'good'} onClick={this.count}>
                        </div>
                        <p className={'pp'}>{num}</p>
                      </div>
                      <div className={'toDo'} onClick={this.review}>
                        <div className={'Comment'} id={'Comment'}>
                        </div>
                        <p className={'pp review'} ref={'rev'}>评论</p>
                      </div>
                    </div>
                  </div>
                  <div className={'commentContent'}>
                    <ul>
                      {
                        com.map((name, index) => {
                          return (
                            <CommentsList key={index} name={name.name} comment={name.comment}
                                          commenting={this.props.inners}/>
                          )
                        })
                      }
                      {
                        inners.map((name, index) => {
                          if (name.num === this.props.num) {
                            return (
                              <CommentsList key={index} name={'kk'} comment={name.inner}/>
                            )
                          }
                        })
                      }

                    </ul>
                  </div>

                  <div className={'wrightComment'} ref={'wrightComment'}>
                      <textarea className={'wright'} placeholder={'我也说一句'}  ref={'text'} maxLength={200}>
                      </textarea>
                    <div className={'sendComm'}>
                      <button className={'commButton'} onClick={this.click}><span>发送</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inners: state.inners
})
export default connect(mapStateToProps, {
  getValue,
})(SourceNoteDiv)