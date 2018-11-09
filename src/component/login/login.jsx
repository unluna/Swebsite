import React, { Component } from 'react'
import './scss/login'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div class="login-aside">

                    <div id="o-box-up"></div>

                    <div id="o-box-down" style="table-layout:fixed;">


                        <div class="registerform" action="demo/ajax_post.jsp">

                            <div class="fm-item">

                                <label for="logonId" class="form-label">请输入账号</label>

                                <input type="text" value="" maxlength="100" id="username" class="i-text" placeholder="请输入账号" />

                                <div class="ui-form-explain"></div>

                            </div>



                            <div class="fm-item">

                                <label for="logonId" class="form-label">登陆密码：</label>

                                <input type="password" value="" id="password" class="i-text" placeholder="请输入密码" />

                                <div class="ui-form-explain"></div>

                            </div>



                            <div class="fm-item pos-r">

                                <label for="logonId" class="form-label">验证码</label>

                                <input type="text" value="" id="yzm" class="i-text yzm" placeholder="请输入验证码" oninput="value=value.replace(/[^\d]/g,'')" />


                            </div>



                            <div class="fm-item">

                                <label for="logonId" class="form-label"></label>

                                <input type="submit" value="登陆" tabindex="4" id="send-btn" class="btn-login" />

                                <div class="ui-form-explain"></div>

                            </div>




                        </div>



                    </div>

                </div>
            </div>
        )
    }
}
