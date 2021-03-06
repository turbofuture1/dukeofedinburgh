// allows to create reducers easily
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  age: 0,
  email: "",
};

// userSlice is a reducer
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    // the state holds the current state of initialState
    // the action is what you want to do to the state
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

// we export the login and logout reducer
export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
