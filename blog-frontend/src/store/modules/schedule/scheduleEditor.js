import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const INITIALIZE = 'scheduleEditor/INITIALIZE';
const CHANGE_INPUT = 'scheduleEditor/CHANGE_INPUT';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

// initial state
const initialState = Map({
  title: '',
  markdown: '',
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  }
}, initialState)