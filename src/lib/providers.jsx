'use client';
/* eslint-disable react/prop-types */
import { Provider } from "react-redux";
import store from "./store";

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
