/*
 * @Author: sussertod
 * @Date:   2016-09-26 17:16:38
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-26 18:03:56
 */

'use strict';

import 'normalize.css'
import {
    log
} from '../../src_0/utils/Utils.js'
import React, {
    Component,
    PropTypes
} from 'react'
import Header from '../components/Header/Header'
import Wrapper from '../components/Wrapper/Wrapper'
import Footer from '../components/Footer/Footer'
import style from './css/layout'

export default class App extends Component {
    render() {
        return (
            <div className={style.contanier}>
                <Header></Header>
                <Wrapper></Wrapper>
                <Footer></Footer>
            </div>
        )
    }
}
