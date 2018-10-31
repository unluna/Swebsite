import React, {Component} from 'react'
import SourceSendNav from './K-SourceSendNav/SourceSendNav'
import SourceSendBox from './K-SourceSendBox/SourceSendBox'
import './SourceSend.scss'
export default class SourceSend extends Component{
  render(){
    return(
      <div className="SourceSend">
        <SourceSendNav/>
        <SourceSendBox/>
      </div>
    )
  }
}