/*
 * @Author: Sussertod
 * @Date:   2016-09-23 22:39:44
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-24 00:19:08
 */

'use strict';
import {
    createStore,
    compose
} from 'redux'
import reducer from '../reducers/combineReducers'
import DevTools from '../containers/DevTools'
import {
    log
} from '../utils/Utils'

export default function configureStore() {
    const enhancer = compose(
        DevTools.instrument()
    )
    const store = createStore(reducer, enhancer)
    return store
}
