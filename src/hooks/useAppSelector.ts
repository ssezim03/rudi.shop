import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootReducer} from "../store/store";


export const useAppSelector:TypedUseSelectorHook<rootReducer>=useSelector
