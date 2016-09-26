/*
 * @Author: Sussertod
 * @Date:   2016-09-23 22:56:38
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-23 22:56:50
 */

'use strict';

import React from 'react';
import {
    createDevTools
} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);
