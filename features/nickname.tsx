import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

export interface NicknameState {
  nickname: string;
}

const initialState: NicknameState = {
  nickname: "",
};

export const nicknameSlice = createSlice({
  name: "nickname",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
  },
});

export const { setNickname } = nicknameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNickname = (state: RootState) => state.nickname.nickname;

export default nicknameSlice.reducer;
