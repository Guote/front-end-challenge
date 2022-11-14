import { configureStore } from '@reduxjs/toolkit';
import { playerSlice } from './player';

export const store = configureStore({
  reducer: {
    [playerSlice.name]: playerSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
