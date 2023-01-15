import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import article from './article/slice';
import search from './search/slice';

export const store = configureStore({
  reducer: {
    article,
    search
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();