import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  token: '',
  tokenExpirationTime: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('payload', action.payload);
      state.token = action.payload.token;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
