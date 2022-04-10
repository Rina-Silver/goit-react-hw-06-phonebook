import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from './contacts-types';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(ADD_CONTACT, ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

export const removeContact = createAction(REMOVE_CONTACT);
export const onChangeFilter = createAction(FILTER_CONTACT);
