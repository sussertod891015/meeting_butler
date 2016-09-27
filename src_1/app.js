/*
 * @Author: Sussertod
 * @Date:   2016-09-26 17:56:00
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 10:24:32
 */

'use strict';
import 'normalize.css'
import {
    log
} from '../src_0/utils/Utils.js'
import React, {
    Component,
    PropTypes
} from 'react'
import {
    render
} from 'react-dom'
import App from './Container/App'

render(<App></App>, document.getElementById('app'));
