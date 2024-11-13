import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: "",
    username: "",
    id: "",
    userInfo: "",
  },
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.user.username;
      state.userInfo = payload.user;
      state.id = payload.user._id;
      console.log(payload);
    },
    registerSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.user.username;
      state.id = payload.user._id;
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.username = "";
      state.id = "";
    },
  },
});

export const { loginSuccess, registerSuccess, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
