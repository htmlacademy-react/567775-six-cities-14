import { combineReducers } from '@reduxjs/toolkit';
import { userProcess } from './user-process/user-process';
import { NameSpace } from '../../consts';
import { offersProcess } from './offers-proccess/offers-proccess';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
