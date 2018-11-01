import React, { Component } from 'react'

import './Contain.scss'

export default class GameContain extends Component {
    render() {
        return (
            <div className="Contain">
                <div className="Menu">
                    <ul>
                        <li className="Menu_Contain">
                            <div className="Point" />
                            <a href="#Depart_intro" className="Menu_Goto">部门介绍</a>
                        </li>
                        <li className="Menu_Contain">
                            <div className="Point" />
                            <a href="#Member_intro" className="Menu_Goto">成员介绍</a>
                        </li>
                        <li className="Menu_Contain">
                            <div className="Point" />
                            <a href="#Bottom" className="Menu_Goto">联系方式</a>
                        </li>
                        <li className="Menu_Contain">
                            <div className="Point" />
                            <a href="#Top" className="Menu_Goto">TOP</a>
                        </li>
                    </ul>
                </div>
                <div id="Depart_intro" className="Depart_intro">
                    <h1>部门介绍</h1>
                    <hr />
                    <div className="Depart_intro_contain">
                        <p>师父，我有个问题。<br />
                            您为什么要指定我这么平凡的徒弟为接班人？<br />
                            您可以反问我，为什么到现在才问这种问题。<br />
                            反正我也清楚，逝去的人永远不会开口作答。<br />
                            我不太确定是否是因为那件事，但以防万一，我还是要跟您再确认一下。<br /><br />
                            “足够发达的科学技术与魔法一样强大。”<br /><br />
                            这曾是师父您最喜欢的一句话，<br />
                            同时也是我最喜欢的话。<br />
                            就因为这样就指定我为接班人的话，那师父您也太荒唐了。<br />
                            除了我们之外，难道其他徒弟真的就没人有共鸣了吗？<br />
                            您知道我有多不容易吗？<br />
                            我竟然成了投入国家级预算的“源能计划”的总负责人，<br />
                            您也知道，我的成绩并不算好。<br />
                            我相信您肯定清楚，毕竟考卷都是师父您亲自为我打的分数。<br />
                            正因为如此，我费尽周折才说服其他人认可您的决定。<br /><br />
                            有时候我不知不觉就会对天叹息，<br />
                            说到底，我还不是为了完成师父您的遗愿！<br />
                            我不得不坚持研究，就连觉都不能好好睡，<br />
                            还被卷入各种大大小小的事故中，<br />
                            我饱经摧残，仿佛把青春都献给了您。<br />
                            哎。<br /><br />
                        </p></div>
                </div>
                <div id="Member_intro" className="Member_intro_title">
                    <h1>成员介绍</h1>
                    <hr />
                    <div className="Member_intro_contain">
                        <ul>
                            <li className="Member_member">
                                <div id="Member_Pic1" className="Member_Pic" />
                                <div className="Member-intro">
                                    <h2>啊哈哈1</h2>
                                    <p>帝国竞技场，有人说这座巨大建筑物是帝国的荣光与繁华，也有人说这是帝国的结痂的伤口。<br />
                                        但不可否认的是，帝国的人们总是非常乐意欣赏那些在竞技场中殊死搏杀的战斗。<br />
                                    </p>
                                </div>
                            </li>
                            <li className="Member_member">
                                <div id="Member_Pic2" className="Member_Pic"></div>
                                <div className="Member-intro">
                                    <h2>啊哈哈1</h2>
                                    <p>帝国竞技场，有人说这座巨大建筑物是帝国的荣光与繁华，也有人说这是帝国的结痂的伤口。<br />
                                        但不可否认的是，帝国的人们总是非常乐意欣赏那些在竞技场中殊死搏杀的战斗。<br />
                                    </p>
                                </div>
                            </li>
                            <li className="Member_member">
                                <div id="Member_Pic3" className="Member_Pic" />
                                <div className="Member-intro">
                                    <h2>啊哈哈1</h2>
                                    <p>帝国竞技场，有人说这座巨大建筑物是帝国的荣光与繁华，也有人说这是帝国的结痂的伤口。<br />
                                        但不可否认的是，帝国的人们总是非常乐意欣赏那些在竞技场中殊死搏杀的战斗。<br />
                                    </p>
                                </div>
                            </li>
                            <li className="Member_member">
                                <div id="Member_Pic4" className="Member_Pic" />
                                <div className="Member-intro">
                                    <h2>啊哈哈1</h2>
                                    <p>帝国竞技场，有人说这座巨大建筑物是帝国的荣光与繁华，也有人说这是帝国的结痂的伤口。<br />
                                        但不可否认的是，帝国的人们总是非常乐意欣赏那些在竞技场中殊死搏杀的战斗。<br />
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}