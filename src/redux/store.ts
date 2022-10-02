import { configureStore } from '@reduxjs/toolkit';

import notes from './notesSlice'

const store = configureStore({
  reducer: notes,

  devTools: process.env.NODE_ENV === 'development',
});

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch