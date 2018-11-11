import React, { Component } from 'react'

import './photoContent.scss'

export default class PhotoContent extends Component {
  render () {
    return (
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
    )
  }
}
