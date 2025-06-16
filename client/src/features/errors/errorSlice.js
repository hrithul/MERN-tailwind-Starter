import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    clearErrors: () => {
      return {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          return action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        () => {
          return {};
        }
      );
  },
});

export const { clearErrors } = errorSlice.actions;
export default errorSlice.reducer;
