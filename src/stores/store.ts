import { createWrapper } from "next-redux-wrapper";

import { configureStore } from '@reduxjs/toolkit'

import repoSlice from './reducer'

const makeStore = () => configureStore({
  reducer: {
    repoReducer: repoSlice.reducer
  }
})
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;


export const wrapper = createWrapper<AppStore>(makeStore);