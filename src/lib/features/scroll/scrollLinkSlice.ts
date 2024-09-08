import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScrollLinkState {
  activeLink: string;
}

const initialState: ScrollLinkState = {
  activeLink: 'about',
};

const scrollLinkSlice = createSlice({
  name: 'scrollLink',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setActive } = scrollLinkSlice.actions;

export default scrollLinkSlice.reducer;
