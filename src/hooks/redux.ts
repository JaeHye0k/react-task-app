import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
export const useTypedSelector = useSelector.withTypes<RootState>();

// https://react-redux.js.org/using-react-redux/usage-with-typescript#define-typed-hooks
