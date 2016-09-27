/*
 * @Author: Sussertod
 * @Date:   2016-09-26 17:27:09
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-26 18:24:38
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

export default class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>footer</div>
        );
    }
}
