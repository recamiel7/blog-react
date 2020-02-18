import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const INITIALIZE = 'scheduleEditor/INITIALIZE';
const CHANGE_INPUT = 'scheduleEditor/CHANGE_INPUT';
const WRITE_SCHEDULE = 'scheduleEditor/WRITE_SCHEDULE';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writeSchedule = createAction(WRITE_SCHEDULE, api.writeSchedule);

// initial state
const initialState = Map({
  title: '',
  markdown: '',
  startDate: '',
  endDate: '',
  scheduleId: null
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
  ...pender({
    type: WRITE_SCHEDULE,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data;
      return state.set('scheduleId', _id);
    }
  }),
}, initialState)