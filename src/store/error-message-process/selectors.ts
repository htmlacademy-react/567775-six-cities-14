import { StateType } from '../../types/state';
import { NameSpace } from '../../../consts';

export const getErrorMessage = (state: StateType): string | null =>
  state[NameSpace.ErrorMessage].errorMessage;
