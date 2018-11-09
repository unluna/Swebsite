
import React from 'react'
import './font-end-mainTop.scss'

export default class PageMainTop extends React.Component {
    render() {
        return (
            <div className="page-main-top">
            <div className="page-main-top-set">
                <div className="page-title">
    
                    什么是前端？
    
                </div>
                <div className="M-pageMain">
    
    
                    <div className="M-wrapper">
                        <div className="M-container" id="c0">
                            <div className="image" id="i0">
                                <div className="city">
                                    
                                </div>
                            </div>
                            <div className="story" id="s0">
                                <div className="info">
                                    <h3>
                                        HTML5
                                    </h3>
                                    <p>
                                        关于html5的事情
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="M-container" id="c1">
                            <div className="image" id="i1">
                                <div className="city">
                                    <img src="./img/css.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="story" id="s1">
                                <div className="info">
                                    <h3>
                                        css
                                    </h3>
                                    <p>
                                        关于css的事情
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="M-container" id="c2">
                            <div className="image" id="i2">
                                <div className="city">
                                  
                                </div>
                            </div>
                            <div className="story" id="s2">
                                <div className="info">
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
    
                <div className="page">
                    <a href="">what's more &emsp; >>></a>
    
                </div>
            </div>
        </div>

        )
    }
}