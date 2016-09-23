/*
 * @Author: Sussertod
 * @Date:   2016-09-23 15:01:05
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-24 00:24:13
 */

'use strict';

import React, {
    Component
} from 'react'
import {
    log
} from '../utils/Utils'

export default class Home extends Component {
    render() {
        const {
            increase,
            decrease,
            number
        } = this.props;
        return (
            <div>
                Some state changes:
                {number}
                <button onClick={() => increase(1)}>Increase</button>
                <button onClick={() => decrease(1)}>Decrease</button>
            </div>
        )
    }
}
