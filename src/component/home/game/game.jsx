import React, { Component } from 'react'
import GameMid from './Mid/Mid';
import GameContain from './Contain/Contain';
import GameBottom from './Bottom/Bottom';

export default class Game extends Component {


  render () {
    return (
      <div>
        <GameMid />
        <GameContain />
        <GameBottom />
      </div>
    )
  }
}