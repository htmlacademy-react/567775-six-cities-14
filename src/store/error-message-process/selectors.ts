import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';

export const getErrorMessage = (state: TState): string | null =>
  state[NameSpace.ErrorMessage].errorMessage;
