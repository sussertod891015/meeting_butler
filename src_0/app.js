/*
 * @Author: Sussertod
 * @Date:   2016-09-22 16:05:45
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 23:16:04
 */

'use strict';

import 'normalize.css'
// import React, {
//     Component,
//     PropTypes
// } from 'react'
// import {
//     render
// } from 'react-dom'
// import {
//     log,
//     adapter,
//     fixTouch
// } from './utils/Utils.js'
// import style from './publicResources/css/public.scss'

// adapter()
// fixTouch()

// class App extends Component {
//     render() {
//         return (
//             <div>123</div>
//         )
//     }
// }

// export default App

// render(<App></App>, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import {
    Router,
    Route,
    IndexRoute,
    // browserHistory
    hashHistory
} from 'react-router'
import {
    syncHistoryWithStore
} from 'react-router-redux'

import App from './components/App'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Home from './components/Home'
import configureStore from './store/configureStore'
import DevTools from './containers/DevTools'

window.store = configureStore()

// const history = syncHistoryWithStore(browserHistory, store)
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="foo" component={Foo}/>
                    <Route path="bar" component={Bar}/>
                </Route>
            </Router>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('app')
)
