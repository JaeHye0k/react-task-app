import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUserState = {
    email: string | null;
    id: string;
};

const initialState: TUserState = {
    email: "",
    id: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, { payload }: PayloadAction<TUserState>) {
            state.email = payload.email;
            state.id = payload.id;
        },
        logout(state) {
            state.email = "";
            state.id = "";
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
