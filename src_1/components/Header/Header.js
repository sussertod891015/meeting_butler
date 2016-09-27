/*
 * @Author: Sussertod
 * @Date:   2016-09-26 17:20:38
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-26 18:00:49
 */

'use strict';
import {
    log
} from '../../../src_0/utils/Utils.js'
import React, {
    Component,
    PropTypes
} from 'react'
import style from './css/layout.scss'

export default class Header extends Component {
    render() {
        return (
            <div className={style.header}>header</div>
        );
    }
}
