import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, onChangeFilter } from './contacts-actions';

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (state.some(e => e.name.includes(payload.name))) {
      alert(`${payload.name} is already in Contactbook!`);
      return state;
    }
    return [payload, ...state];
  },
  [removeContact]: (state, { payload }) => {
    state = state.filter(item => item.id !== payload);
    return state;
  },
});

const filterReducer = createReducer('', {
  [onChangeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
