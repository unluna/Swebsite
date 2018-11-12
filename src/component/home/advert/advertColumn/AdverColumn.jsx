import React, { Component } from 'react'
import './AdverColumn.scss'

export default class AdvertColumn extends Component {
  render () {

    return (
      <div className="AdvertColumn">
        <div className={'SendSomethings'}>
          <div className={'News'}>
            <button className={'advertButton'}><span className={'spanL'} id={'spanL'}>Send News</span></button>
          </div>
          <div className={'Notes'}>
            <button className={'advertButton'}><span className={'spanR'} id={'spanR'}>Send Notices</span></button>
          </div>
        </div>
        <div className={'Welcome'}>
          <h2>Meet Our Members</h2>
        </div>
        <div className="column">
          <ul>
            <li>
              <div className="up">
                <div className={'logo'}>
                </div>
              </div>
              <div className="down">
                <div className={'MemberName'}><span> 佟智博</span></div>
                <p className={'Text'}>
                  Since I go to school, I spend a lot of time in study. My classmates and teachers are just like my
                  families. We almost meet each other every day. My teachers help me a lot. When I meet problems in
                  study, they are very patient and help me to figure out the answers. When I have trouble in getting
                  along with other students, they will talk to me and comfort me. I am so thankful to them, because they
                  care about me just like my parents. I respect them so much. In my heart, they are the great persons.
                  So I must study hard, so that I can return their love.
                </p></div>
            </li>
            <li>
              <div className="up">
                <div className={'logo'}></div>
              </div>
              <div className="down">
                <div className={'MemberName'}><span> 佟湘玉</span></div>
                <p className={'Text'}>
                  寡妇门前是非多，而她这个从没见过丈夫的寡妇，是非少得了吗？身兼同福客栈的掌柜，和龙门镖局的大千金，她从小娇生惯养锦衣玉食，下嫁衡山派掌门，还没到衡山，却成了寡妇，从此要肩负起照顾尚未成年的小姑子的责任。所谓长嫂如母，她一直在努力当一名好嫂子兼幼教家，同时，身为掌柜，她还得全心全意去扶助身边的人们。这样的生活，她能适应吗？这样的责任，她挑得起来吗？身在江湖，一个手无缚鸡之力的弱女子，她该如何自处？一个门前是非多的女人，她怎样去追求对白展堂的那份爱情？</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}