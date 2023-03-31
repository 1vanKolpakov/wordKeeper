import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dictionaryReducer } from "./dictionarySlice";
import favouritesSlice from "./favouritesSlice";
import searchSlice from "./searchSlice";

const rooReducer = combineReducers({
  dictionary: dictionaryReducer,
  favorites: favouritesSlice,
  search: searchSlice,
});

const saveFavouritesWords = (store) => (next) => (action) => {
  if( action.type === 'favorites/addFavorite') {
    const favoritesWords = store.getState().favorites.words;
    localStorage.setitem('favoritesWords', JSON.stringify(favoritesWords))
  }
  return next(action)
}

const store = configureStore({
  reducer: rooReducer,
  middleware: [saveFavouritesWords]
})

export type RootState = ReturnType<typeof rooReducer>;

export default store;