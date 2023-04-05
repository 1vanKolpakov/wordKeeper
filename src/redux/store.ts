import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { dictionaryReducer } from "./dictionarySlice";
import searchSlice from "./searchSlice";

const rooReducer = combineReducers({
  dictionary: dictionaryReducer,
  search: searchSlice,
});


const store = configureStore({
  reducer: rooReducer,
})

export type RootState = ReturnType<typeof rooReducer>;
export type AppDispatch = typeof store.dispatch

export default store;