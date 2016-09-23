/*
 * @Author: Sussertod
 * @Date:   2016-09-23 22:36:56
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-24 00:07:35
 */

'use strict';

import {
    combineReducers
} from 'redux'
import {
    routerReducer
} from 'react-router-redux'
import update from './count'
import {
    log
} from '../utils/Utils'

const reducer = combineReducers({
    update,
    routing: routerReducer
})

export default reducer
