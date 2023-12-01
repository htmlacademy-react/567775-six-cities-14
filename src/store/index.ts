import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer.ts';
import { createAPI } from '../services/api';
import { redirect } from '../middleware/redirect.ts';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
