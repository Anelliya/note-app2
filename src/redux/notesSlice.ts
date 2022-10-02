import {  PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


import INote from '../noteInterface'

interface IPayload {
  id?: string,
  name: string,
  content: string,
  category: string,
  status?: string

}

const regexp =
  /(0?[1-9]|[12]\d|3[01]|[1-9])(?<sep>[./-])([0][1-9]|1[0-2]|[1-9])\k<sep>\d{4}/g;

const initialNotes:INote[] = [
  {
    id: 'XWaQXcbk0',
    name: 'Shoping list',
    created: 'Tue April 20 2021',
    category: 'Task',
    content: 'Tomatos, bread ',
    dates: null,
    status: 'active',
  },
  {
    id: 'XWaQXcbk1',
    name: 'The theory of evolution',
    created: 'Mon April 27 2021',
    category: 'Random Thought',
    content: 'The evolution',
    dates: null,
    status: 'active',
  },
  {
    id: 'XWaQXcbk8',
    name: 'Books for it',
    created: ' Fr April 1 2021',
    category: 'Idea',
    content: 'Can be power',
    dates: null,
    status: 'active',
  },
  {
    id: 'XWaQXcbk2',
    name: 'New Feature',
    created: 'Tue May 05 2021',
    category: 'Idea',
    content: 'Implement new function 3/5/2021, 5/5/2021',
    dates: '3/5/2021, 5/5/2021',
    status: 'active',
  },
  {
    id: 'XWaQXcbk3',
    name: 'William Gaddis',
    created: ' Fr May 07 2021',
    category: 'Random Thought',
    content: 'Power doesn’t corrupt people; people corrupt power.',
    dates: null,
    status: 'archived',
  },
  {
    id: 'XWaQXcbk4',
    name: 'William Gaddis',
    created: ' Fr May 15 2021',
    category: 'Task',
    content: 'The lian startup.',
    dates: null,
    status: 'archived',
  },
  {
    id: 'XWaQXcbk15',
    name: 'Shoping list',
    created: 'Tue April 20 2021',
    category: 'Task',
    content: 'Tomatos, bread ',
    dates: null,
    status: 'active',
  },
];

const notes = createSlice(
  {
    name: 'notes',
    initialState: initialNotes,
    reducers: {
      addNote: (state, { payload }: PayloadAction<IPayload>) => {
        const {name, category, content} = payload;
        const data = {
          id: uuidv4(),
          name, created:
          new Date().toDateString(),
          category,
          content, 
          dates: content.match(regexp) ? content.match(regexp) : null,
          status: 'active',
        }
        return [...state, data]
      },
      deleteNote: (state: INote[], { payload }: PayloadAction<string>) => state.filter(note => note.id !== payload),
      toggleNoteStatus: (state: INote[], { payload }: PayloadAction<{id: string | null , status: string}>) => {
        state.map(note =>
          note.id === payload.id ? note.status = payload.status : null)
      },
      editNote: (state: INote[], { payload }: PayloadAction<IPayload>) => {
        const currentNote: INote | undefined = state.find(note => note.id === payload.id);
        const { id, name, content, category } = payload;
        const dates = content?.match(regexp) ? content?.match(regexp) : null
        const updatedData: {} = {id, name, content, category, dates}
       
        for (let key in updatedData) {
          if(currentNote){
            currentNote[key as keyof INote] = updatedData[key as keyof {}]
          }
        }
        
      }
    }  
  }
)

export const { addNote, deleteNote, toggleNoteStatus, editNote } = notes.actions;

export default notes.reducer;
