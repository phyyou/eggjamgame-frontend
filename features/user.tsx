import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

export interface userState {
  nickname: string;
  score: number;
}

const initialState: userState = { nickname: "", score: 0 };

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUser: (state, action: PayloadAction<userState>) => {
      state = action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setUserScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
  },
});

export const { setUser, setNickname, setUserScore } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;
export const selectNickname = (state: RootState) => state.user.nickname;
export const selectUserScore = (state: RootState) => state.user.score;

export default userSlice.reducer;
