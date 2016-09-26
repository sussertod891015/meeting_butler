'use strict';
import {
    INCREASE,
    DECREASE
} from '../actions/count'
import {
    log
} from '../utils/Utils'

const initialState = {
    number: 1
}

export default function update(state = initialState, actions) {
    switch (actions.type) {
        case INCREASE:
            {
                return {
                    number: state.number + actions.amount
                }
            }
        case DECREASE:
            {
                return {
                    number: state.number - actions.amount
                }

            }
        default:
            {
                return state
            }
    }
}
