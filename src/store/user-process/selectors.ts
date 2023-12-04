import { TState } from '../../types/state';
import { NameSpace, AuthorizationStatus } from '../../../consts';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: TState): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserEmail = (state: TState): string | null =>
  state[NameSpace.User].userEmail;
