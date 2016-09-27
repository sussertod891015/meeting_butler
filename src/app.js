/*
 * @Author: Sussertod
 * @Date:   2016-09-27 11:21:53
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 17:54:26
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react'
import {
    render
} from 'react-dom'

import 'normalize.css'
import './publicResources/css/public.scss'
import {
    fixTouch,
    adapter
} from './utils/Utils'
import style from './publicResources/css/font.scss'
import {
    log
} from './utils/Utils'

fixTouch()
adapter()

log(style)

export default class App extends Component {
    render() {
        return (
            <div>
                <div className={style["material-icons"]}>home</div>
            </div>

        )
    }
}

render(<App></App>, document.getElementById('app'))
