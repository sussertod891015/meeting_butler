/*
 * @Author: Sussertod
 * @Date:   2016-09-27 11:21:53
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 15:48:08
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
import './publicResources/css/public.css'
import {
    fixTouch,
    adapter
} from './utils/Utils'
import style from './publicResources/css/font.css'

fixTouch()
adapter()

export default class App extends Component {
    render() {
        return (
            <div className={style["material-icons"]}>home</div>
        )
    }
}

render(<App></App>, document.getElementById('app'))
