import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { dictionaryReducer } from "./dictionarySlice";
import favouritesSlice, { addWord } from "./favouritesSlice";
import searchSlice from "./searchSlice";

const rooReducer = combineReducers({
  dictionary: dictionaryReducer,
  favorites: favouritesSlice,
  search: searchSlice,
});

// const saveFavouritesWords: Middleware<{}, RootState> = (store) => (next) => (action) => {

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

// const saveFavouritesWords: Middleware = (store: any) => (next: any) => async (action: any) => {
//   next(action)
//   console.log('!!!!!!!!!!!!!!!!', action.type)
//   // const result = next(action);
//   // console.log('?????????', result)
//   if (action.type === addWord.type) {
//     const { favourites } = store.getState().favourites;
//     localStorage.setItem('favourites', JSON.stringify(favourites));
//   }

// const saveFavouritesWords: Middleware = (store) => (next) => (action) => {
//   console.log('!!!!', typeof action)
//   if (typeof action === 'function' || typeof action.then === 'function') {
//     return next(action);
//   }

//   const result = next(action);

//   if (action.type === addWord.type || action.type === addWord.type) {
//     const favourites = store.getState().search.favourites;
//     localStorage.setItem('favourites', JSON.stringify(favourites));
//   }

//   return result;
// };

const store = configureStore({
  reducer: rooReducer,
  // middleware: [saveFavouritesWords]
})

export type RootState = ReturnType<typeof rooReducer>;
export type AppDispatch = typeof store.dispatch

export default store;