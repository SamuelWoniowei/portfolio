import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeLink: 'about',
};

const scrollLinkSlice = createSlice({
  name: 'scrollLink',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setActive } = scrollLinkSlice.actions;

export default scrollLinkSlice.reducer;
