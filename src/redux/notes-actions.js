import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const regexp =
  /(0?[1-9]|[12]\d|3[01]|[1-9])(?<sep>[./-])([0][1-9]|1[0-2]|[1-9])\k<sep>\d{4}/g;

export const addNote = createAction(
  'note/add',
  ({ name, content, category }) => {
    return {
      payload: {
        id: uuidv4(),
        name,
        created: new Date().toDateString(),
        category,
        content,
        dates: content?.match(regexp) ? content?.match(regexp) : null,
        status: 'active',
      },
    };
  },
);

export const editNote = createAction(
  'note/edit',
  ({ name, category, content, id }) => {
    console.log('edit');
    return {
      payload: {
        id,
        name,
        content,
        category,
        dates: content?.match(regexp) ? content?.match(regexp) : null,
      },
    };
  },
);

export const toggleNoteStatus = createAction('note/toggleStatus');
export const deleteNote = createAction('note/delete');
export const archiveTodo = createAction('note/archive');
