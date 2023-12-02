import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../consts';
import { ErrorMessageProcess } from '../../types/state.ts';

const initialState: ErrorMessageProcess = {
  errorMessage: null,
};

export const errorMessage = createSlice({
  name: NameSpace.ErrorMessage,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      const { error } = action.payload;
      state.errorMessage = error;
    },
    removeError: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { setError, removeError } = errorMessage.actions;
