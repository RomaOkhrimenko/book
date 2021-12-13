import { RootState } from './../state/reducers/root';
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector