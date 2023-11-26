import { Navigate } from 'react-router-dom';
import { AppRouter, AuthorizationStatus } from '../../../consts';

type PrivateRouteProps = {
  authStatus: AuthorizationStatus;
  children: React.ReactNode;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  authStatus,
}: PrivateRouteProps) =>
  authStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRouter.Login} />
  );
