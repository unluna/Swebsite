import React, { Component } from 'react'

import './homeContent.scss'

export default class HomeContent extends Component {
  render () {
    return (
      <main className={'B_main'}>
        {/*nav begin*/}
        <div className={'nav-big-wrapper'}>
          <div className={'logo-wrapper'}>
            <div className={'logo-img'}/>
          </div>
          <ul className={'nav-wrapper'}>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        {/*nav content begin*/}
        <div className={'navContent-big-wrapper'}>
          <ul className={'logos-wrapper'}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className={'content-wrapper'}/>
        </div>
        {/*cut off line begin*/}
        <div className={'cutOffLine'}/>
        {/*main content begin*/}
        <div className={'main-content-wrapper'}>
          {/*introduce begin*/}
          <div className={'content-aside'}>
            <h1>Hey. We are a team of web developers with a sense of style and
              uniqueness.</h1>
            <p>Maecenas purus metus, interdum eu auctor eu, dignissim nec nisl.
              Suspendisse luctus placerat augue a cursus. Mauris sit amet odio
              ac urna placerat blandit at commodo eros. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.</p>
            <span className={'clearfix'}>View all services</span>
          </div>
          {/*introduce-main content begin*/}
          <div className={'content-main'}>
            <div className={'content-main-wrapper-T-L'}>
              <h1 className={'content-main-h1-t'}>Easy to Customize</h1>
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
        {/*photo begin*/}
        <div className={'photo-big-wrapper'}>
          <div className={'photo-aside'}>
            <h1>Check out our portfolio.</h1>
            <p>Maecenas purus metus, interdum eu auctor eu, dignissim nec nisl.
              Suspendisse luctus placerat augue a cursus.</p>
            <span>View all projects</span>
          </div>
          {/*photo main begin*/}
          <div className={'photo-main'}>
            <div className={'little-photo-wrapper'}>
              <div className={'eyes-T-L'}/>
              <div className={'eyes-T-R'}/>
              <div className={'eyes-B-L'}/>
              <div className={'eyes-B-R'}/>
              <div className={'eyes-mid'}/>
              <div className={'photo-main-corner'}>
                <h1>JUNE</h1>
                <p>05</p>
              </div>
            </div>
            <div className={'little-photo-wrapper'}>
              <div className={'eyes-T-L'}/>
              <div className={'eyes-T-R'}/>
              <div className={'eyes-B-L'}/>
              <div className={'eyes-B-R'}/>
              <div className={'eyes-mid'}/>
              <div className={'photo-main-corner'}>
                <h1>JUNE</h1>
                <p>05</p>
              </div>
            </div>
            <div className={'little-photo-wrapper'}>
              <div className={'eyes-T-L'}/>
              <div className={'eyes-T-R'}/>
              <div className={'eyes-B-L'}/>
              <div className={'eyes-B-R'}/>
              <div className={'eyes-mid'}/>
              <div className={'photo-main-corner'}>
                <h1>JUNE</h1>
                <p>05</p>
              </div>
            </div>
          </div>
        </div>
        {/*website related*/}
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
      </main>
    )
  }
}
