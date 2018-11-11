import React, { Component } from 'react'

import './mainContent.scss'

export default class MainContent extends Component {
  render () {
    return (
      <div className={'main-content-wrapper'}>
        {/*introduce begin*/}
        <div className={'content-aside'}>
          <h1>欢迎来到数据科协</h1>
          <p>数据科协全称黑龙江大学数据科学与技术学院科技创新协会
            数据科协全称黑龙江大学数据科学与技术学院科技创新协会
            数据科协全称黑龙江大学数据科学与技术学院科技创新协会
            数据科协全称黑龙江大学数据科学与技术学院科技创新协会</p>
          <span className={'clearfix'}>2018.11.1</span>
        </div>
        {/*introduce-main content begin*/}
        <div className={'content-main'}>
          <div className={'content-main-wrapper-T-L'}>
            <h1 className={'content-main-h1-t'}>2018.10.31 下午1点停水</h1>
            <p className={'content-main-p-t'}>Maecenas purus metus, interdum
              eu auctor eu, dignissim nec nisl. Suspendisse luctus placerat
              augue a cursus. Mauris sit amet odio ac urna placerat blandit at
              commodo eros. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.</p>
            <div className={'content-main-div'}/>
          </div>
          <div className={'content-main-wrapper-T-R'}>
            <h1 className={'content-main-h1-t'}>Easy to Customize</h1>
            <p className={'content-main-p-t'}>Maecenas purus metus, interdum
              eu auctor eu, dignissim nec nisl. Suspendisse luctus placerat
              augue a cursus. Mauris sit amet odio ac urna placerat blandit at
              commodo eros. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.</p>
            <div className={'content-main-div'}/>
          </div>
          <div className={'content-main-wrapper-B-L'}>
            <h1 className={'content-main-h1-b'}>Easy to Customize</h1>
            <p className={'content-main-p-b'}>Maecenas purus metus, interdum
              eu auctor eu, dignissim nec nisl. Suspendisse luctus placerat
              augue a cursus. Mauris sit amet odio ac urna placerat blandit at
              commodo eros. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.</p>
            <div className={'content-main-div'}/>
          </div>
          <div className={'content-main-wrapper-B-R'}>
            <h1 className={'content-main-h1-b'}>Easy to Customize</h1>
            <p className={'content-main-p-b'}>Maecenas purus metus, interdum
              eu auctor eu, dignissim nec nisl. Suspendisse luctus placerat
              augue a cursus. Mauris sit amet odio ac urna placerat blandit at
              commodo eros. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.</p>
            <div className={'content-main-div'}/>
          </div>
        </div>
      </div>
    )
  }
}
