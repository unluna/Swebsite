import React, {Component} from 'react'
import SourceSendNav from './K-SourceSendNav/SourceSendNav'
import SourceSendBox from './K-SourceSendBox/SourceSendBox'
import './SourceSendHome.scss'
export default class SourceSendHome extends Component{
  scroll = () => {
    const hight=this.refs.hight;
    hight.scrollTop=hight.scrollHeight;
  }
  // onKeyDown={this.scroll} onKeyPress={this.scroll} onKeyUp={this.scroll}
  render(){
    return(
      <div className="SourceSend" onChange={this.scroll} onKeyDown={this.scroll} onKeyPress={this.scroll} onKeyUp={this.scroll} ref={'hight'}>
        <SourceSendNav/>
        <SourceSendBox/>
      </div>
    )
  }
}