import { configureStore } from '@reduxjs/toolkit';
import scrollLinkReducer from './features/scroll/scrollLinkSlice'; 

const store = configureStore({
  reducer: {
    scrollLink: scrollLinkReducer,
  },
});

export default store;