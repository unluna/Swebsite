import React, { Component } from 'react'
import './MembersItem.scss'

export default class MembersItem
  extends Component {
  render () {
    const {info} = this.props
    //console.log({info})
    return (
      <div className={'Item'}>
        <ul>
          <li>
            <div>
              <div className={'flex'}>
                <div className={'itemBlock img'}>
                  <div className={'itemMask'}>
                    <div className={'maskIcon'} id={'maskIcon'}>
                      <div className={'topLeft'} id={'tl'}>

                      </div>
                      <div className={'topRight'} id={'tr'}>

                      </div>
                      <div className={'botLeft'}
                           id={'bl'}>

                      </div>
                      <div className={'botRight'}
                           id={'br'}>

                      </div>
                      <div id={'zoom'}>

                      </div>
                    </div>

                  </div>
                </div>
                <div className={'info'}>
                  {
                    info.map((name, index) => {
                      if (name.grade) {
                        return (<h4 key={index}>{name.grade}级：</h4>)
                      }
                      return (
                        <div className={'name'} key={index}>

                            <span>
                          {name.name}{' '}
                        </span>
                        </div>)
                    })}
                </div>
              </div>
              <h4> 前端部门</h4>
              <div className={'itemBorder'}>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}