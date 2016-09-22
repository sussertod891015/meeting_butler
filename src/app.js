/*
 * @Author: Sussertod
 * @Date:   2016-09-22 16:05:45
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-22 17:55:04
 */

'use strict';

import 'normalize.css'
import React, {
    Component,
    PropTypes
} from 'react'
import {
    render
} from 'react-dom'
import {
    log,
    adapter,
    fixTouch
} from './utils/Utils.js'
import style from './publicResources/css/public.scss'

adapter();
fixTouch();

class App extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

export default App

render(<App></App>, document.getElementById('app'))
