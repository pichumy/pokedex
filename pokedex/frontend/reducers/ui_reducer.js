import { merge } from 'lodash';

const initialState = {};

const uiReducer = (state = initialState, action) => {
  let newState = {};
  Object.freeze(state);
  switch(action.type) {
    default: return state;
  }
};

export default uiReducer;
