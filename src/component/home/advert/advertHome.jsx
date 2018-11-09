import React,{Component} from 'react'
import AdvertHead from './advertHead/AdvertHead'
import AdvertColumn from './advertColumn/AdverColumn'
export default class AdvertHome extends Component{
  render(){
    return(
      <div>
        <AdvertHead/>
        <AdvertColumn/>
      </div>
    )
  }
}