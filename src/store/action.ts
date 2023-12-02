import { createAction } from '@reduxjs/toolkit';
import { AppRouter } from '../../consts';

export const redirectToRoute = createAction<AppRouter>('redirectToRoute');
