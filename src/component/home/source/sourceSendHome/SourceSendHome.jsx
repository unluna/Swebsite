import React, {Component} from 'react'
import SourceSendNav from './K-SourceSendNav/SourceSendNav'
import SourceSendBox from './K-SourceSendBox/SourceSendBox'
import './SourceSendHome.scss'
export default class SourceSendHome extends Component{
  render(){
    return(
      <div className="SourceSend">
        <SourceSendNav/>
        <SourceSendBox/>
      </div>
    )
  }
}