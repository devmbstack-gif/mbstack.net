import { createSlice } from "@reduxjs/toolkit";
import { getAdminKey } from "@/lib/api";

type AuthState = {
  isAuthenticated: boolean;
  checked: boolean;
};

const initialState: AuthState = {
  isAuthenticated: false,
  checked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkAuth(state) {
      state.isAuthenticated = Boolean(getAdminKey());
      state.checked = true;
    },
    setAuthenticated(state) {
      state.isAuthenticated = true;
      state.checked = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.checked = true;
    },
  },
});

export const { checkAuth, setAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;
