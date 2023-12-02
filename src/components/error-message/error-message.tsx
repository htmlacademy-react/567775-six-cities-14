import { useAppSelector } from '../../hooks/use-store';
import { getErrorMessage } from '../../store/error-message-process/selectors';
import styled from './error-message.module.css';

export const ErrorMessage: React.FC = () => {
  const error = useAppSelector(getErrorMessage);

  return error ? <div className={styled.errorMessage}>{error}</div> : null;
};
