import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


export type FavouriteWord = {
  word: string;
  partOfSpeech: string;
  definition: string;
}
export interface FavouritesState {
  favouriteWords: FavouriteWord[]
}
const initialState: FavouritesState = {
  favouriteWords: []
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    // addToFavourites: (state, action: PayloadAction<FavouriteWord>) => {
    //   state.favouriteWords.push(action.payload)
    // },
    // removeFromFavourites: (state, action: PayloadAction<string>) => {
    //   state.favouriteWords = state.favouriteWords.filter((word) => word.definition !== action.payload)
    // },
  },
})

// export const { removeFromFavourites} = favouritesSlice.actions;
export default favouritesSlice.reducer

export const selectFavourites = (state: RootState) => state.favorites.favouriteWords;