import { Navigate } from 'react-router-dom';
import { AppRouter } from '../../../consts';
import { useAppSelector } from '../../hooks/use-store';
import { getCheckAuthIsLoaded } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  authStatus: boolean;
  children: React.ReactNode;
  pathRoute?: AppRouter;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  authStatus,
  pathRoute = AppRouter.Login,
}: PrivateRouteProps) => {
  const checkAuthIsLoaded = useAppSelector(getCheckAuthIsLoaded);

  if (checkAuthIsLoaded) {
    return authStatus ? children : <Navigate to={pathRoute} />;
  }
};
