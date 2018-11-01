
import React from 'react'
import './font-end-mainTop.scss'

export default class PageMainTop extends React.Component {
    render() {
        return (
            <div className="FE-page-main-top">
            <div className="FE-page-main-top-set">
                <div className="FE-page-title">
    
                    什么是前端？
    
                </div>
                <div className="FE-pageMain">
    
    
                    <div className="FE-wrapper">
                        <div className="FE-container" id="c0">
                            <div className="FE-image" id="i0">
                                <div className="FE-city">
                                    
                                </div>
                            </div>
                            <div className="FE-story" id="s0">
                                <div className="FE-info">
                                    <h3>
                                        HTML5
                                    </h3>
                                    <p>
                                        关于html5的事情
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="FE-container" id="c1">
                            <div className="FE-image" id="i1">
                                <div className="FE-city">
                                    <img src="./img/css.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="FE-story" id="s1">
                                <div className="FE-info">
                                    <h3>
                                        css
                                    </h3>
                                    <p>
                                        关于css的事情
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="FE-container" id="c2">
                            <div className="FE-image" id="i2">
                                <div className="FE-city">
                                  
                                </div>
                            </div>
                            <div className="FE-story" id="s2">
                                <div className="FE-info">
                                    <h3>
                                        JavaScript
                                    </h3>
                                    <p>
                                        关于JavaScript的事情
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div className="FE-page">
                    <a href="">what's more &emsp; >>></a>
    
                </div>
            </div>
        </div>

        )
    }
}