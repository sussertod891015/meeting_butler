/*
 * @Author: Sussertod
 * @Date:   2016-09-26 17:29:52
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-26 18:06:55
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

export default class Wrapper extends Component {
    render() {
        return (
            <div className={style.wrapper}>wrapper</div>
        );
    }
}
