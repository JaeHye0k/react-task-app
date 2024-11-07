import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogItem } from "../../types";

type TLoggerState = {
    logArray: ILogItem[];
};

type TLoggerAction = {
    log: ILogItem;
};

const initialState: TLoggerState = {
    logArray: [
        {
            logId: "log 0",
            logMessage: "log 0",
            logAuthor: "lee",
            logTimeStamp: "1919293182",
        },
    ],
};

const loggerSlice = createSlice({
    name: "logger",
    initialState,
    reducers: {
        addLog(state, { payload }: PayloadAction<TLoggerAction>) {
            state.logArray.push(payload.log);
        },
    },
});

export const { addLog } = loggerSlice.actions;

export const loggerReducer = loggerSlice.reducer;
