import { TIME_HIDE_ERROR_MESSAGE } from '../../consts';
import { store } from '../store';
import {
  removeError,
  setError,
} from '../store/error-message-process/error-mewssage-process';

export const processErrorHandle = (message: string | null): void => {
  store.dispatch(setError({ error: message }));

  setTimeout(() => {
    store.dispatch(removeError());
  }, TIME_HIDE_ERROR_MESSAGE);
};
