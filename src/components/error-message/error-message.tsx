import { useAppSelector } from '../../hooks/use-store';

export const ErrorMessage: React.FC = () => {
  const error = useAppSelector((state) => state.error);

  return error ? <div className="error-message">{error}</div> : null;
};
