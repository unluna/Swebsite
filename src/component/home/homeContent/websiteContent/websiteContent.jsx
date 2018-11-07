import React, { Component } from 'react'

import './websiteContent.scss'

export default class WebsiteContent extends Component {
  render () {
    return (
      <div className={'website-big-wrapper'}>
        <div className={'website-aside-wrapper'}>
          <h1>Contact Info</h1>
          <ul>
            <li>12345 / Some Street, Portland, USA</li>
            <li>phone: +1 (44) 123-45-67</li>
            <li>Skype Me</li>
            <li>support@color-theme.com</li>
          </ul>
        </div>
        {/*website main begin*/}
        <div className={'website-main-wrapper'}>
          <div className={'main-little-wrapper'}>
            <h1 className={'big-tt'}>Popular Posts</h1>
            <ul>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={'main-little-wrapper'}>
            <h1 className={'big-tt'}>Popular Posts</h1>
            <ul>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={'main-little-wrapper'}>
            <h1 className={'big-tt'}>Popular Posts</h1>
            <ul>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
              <li>
                <div className={'sml-img'}/>
                <div className={'sml-content'}>
                  <h1>Artistic Wormhole</h1>
                  <p>June 24, 2012</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
