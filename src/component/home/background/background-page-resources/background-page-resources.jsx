
import React from 'react'
import { NavLink } from 'react-router-dom'
import { sourceHome } from '../../../../rooter/rootTable'
import './background-page-resources.scss'


export default class BgPageResources extends React.Component {
    render() {
        return (
            <div class="page-resources">
                <div class="page-resources-set">
                    <div class="resources-title">
                        想要更加了解我们？我们为你准备了许多相关资源让您了解后台这个家庭
                </div>
                    <NavLink to={sourceHome}>

                        <div class="resources-jump">
                            <b> welcome to join us</b>
                        </div>
                    </NavLink>
                </div>

            </div>

        )
    }
}