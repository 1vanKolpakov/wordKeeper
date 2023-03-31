import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { dictionaryReducer } from "./dictionarySlice";
import favouritesSlice, { addWord } from "./favouritesSlice";
import searchSlice from "./searchSlice";

const rooReducer = combineReducers({
  dictionary: dictionaryReducer,
  favorites: favouritesSlice,
  search: searchSlice,
});

// const saveFavouritesWords: Middleware<{}, RootState> = ({getState}) => (next) => (action) => {

//   if( action.type === 'favorites/addWord') {
//     const favoritesWords = store.getState().favorites.words;
//     localStorage.setItem('favorites', JSON.stringify(favoritesWords))

//     setTimeout(() => {
//       const updateFavorites = store.getState().favorites.words;
//       localStorage.setItem('favorites', JSON.stringify(updateFavorites));
//       store.dispatch({type: 'favorites/updated', payload: updateFavorites})
//     }, 1000)
//   }
//   return next(action)
// }

const store = configureStore({
  reducer: rooReducer,
  // middleware: [saveFavouritesWords]
})

export type RootState = ReturnType<typeof rooReducer>;

export default store;