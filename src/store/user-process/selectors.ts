import { StateType } from '../../types/state';
import { NameSpace, AuthorizationStatus } from '../../../consts';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: StateType): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
export const getUserEmail = (state: StateType): string | null =>
  state[NameSpace.User].userEmail;
export const getCheckAuthIsLoaded = (state: StateType): boolean =>
  state[NameSpace.User].checkAuthIsLoaded !== false;
