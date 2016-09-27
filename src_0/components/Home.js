/*
 * @Author: Sussertod
 * @Date:   2016-09-23 15:01:05
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 23:18:25
 */

'use strict';

import React, {
    Component
} from 'react'
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux'
import * as updateActions from '../actions/count'
import {
    log
} from '../utils/Utils'

export class Home extends Component {
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

function mapStateToProps(state) {
    return {
        number: state.update.number
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(updateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
