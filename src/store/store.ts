import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import gameReducer from '../features/games/gameSlice';
import studentReducer from '../features/student/studentSlice';
import resultsReducer from '../features/results/resultsSlice';


export const store = configureStore({
    reducer: {
        games: gameReducer,
        student: studentReducer,
        results: resultsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;