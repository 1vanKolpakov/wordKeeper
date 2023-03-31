import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Word } from "./dictionarySlice";
import { RootState } from "./store";

export interface FavouritesState {
  words: Word[]
}

const initialState: FavouritesState = {
  words: []
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      state.words.push(action.payload)
    },
    removeWord: (state, action: PayloadAction<number>) => {
      state.words = state.words.filter((word) => word.id !== action.payload)
    },
  },
})

export const {addWord, removeWord} = favouritesSlice.actions;
export default favouritesSlice.reducer

export const selectFavourites = (state: RootState) => state.favorites.words;