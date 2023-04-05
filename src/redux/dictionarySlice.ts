import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface DictionaryState {
  allWords: Word[];
  searchTerm: string;
  filterPartOfSpeech: string;
}
export interface Word {
  partOfSpeech: string;
  definition: string;
  word: string;
}
export interface FilteredWords {
  id: number;
  partOfSpeech: string;
  definition: string;
  word: string;
}
const initialState: DictionaryState = {
  allWords: [],
  searchTerm: "",
  filterPartOfSpeech: "",
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addWords(state, action: PayloadAction<Word[]>) {
      state.allWords = action.payload;
    },
    addToFavourites: (state, action: PayloadAction<Word>) => {
      state.allWords.push(action.payload);
    },
    removeFromFavourites: (state, action: PayloadAction<Word>) => {
      state.allWords = state.allWords.filter(
        (word) => word.definition !== action.payload.definition
      );
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setFilterPartOfSpeech(state, action: PayloadAction<string>) {
      state.filterPartOfSpeech = action.payload;
    },
  },
});

export const { actions: dictionaryAction, reducer: dictionaryReducer } =
  dictionarySlice;
export const {
  addWords,
  addToFavourites,
  removeFromFavourites,
  setSearchTerm,
  setFilterPartOfSpeech,
} = dictionarySlice.actions;
export const selectAllMethods = (state: RootState) => state.dictionary;
export const selectAllWords = (state: RootState) => state.dictionary.allWords;
export const selectSearchTerm = (state: RootState) =>
  state.dictionary.searchTerm;
export const selectFilterPartOfSpeech = (state: RootState) =>
  state.dictionary.filterPartOfSpeech;
