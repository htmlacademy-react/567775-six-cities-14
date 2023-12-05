import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { StateType, AppDispatchType } from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
