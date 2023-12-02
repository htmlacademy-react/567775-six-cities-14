import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from './use-store';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { AppRouter, AuthorizationStatus } from '../../consts';
import { setFavoritesAction } from '../store/api-actions';

export const useFavorites = (offerId: string, status: number) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  function onChangeFavorites() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRouter.Login);
    }

    dispatch(setFavoritesAction({ offerId, status }));
  }

  return onChangeFavorites;
};
