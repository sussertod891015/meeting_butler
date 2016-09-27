/*
 * @Author: Sussertod
 * @Date:   2016-09-26 17:29:52
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 10:55:40
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
import font from '../../public/font'


export default class Wrapper extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div>warpper</div>
                <i className={font["material-icons"]}>flip_to_back</i>
            </div>
        );
    }
}
