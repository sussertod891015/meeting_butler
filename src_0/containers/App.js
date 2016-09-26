/*
 * @Author: Sussertod
 * @Date:   2016-09-23 17:12:14
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-24 00:23:54
 */

'use strict';

import React from 'react'
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux'
import * as updateActions from '../actions/count'
import Home from '../components/Home'
import {
    log
} from '../utils/Utils'

function mapStateToProps(state) {
    return {
        number: state.update.number
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(updateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
