import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";

interface DictionaryState{
  allWords: Word[];
  // starredWords: Word[];
  searchTerm: string;
  filterPartOfSpeech: string;
}
export interface Word {
  id: number;
  term: string;
  partOfSpeech: string;
  definition: string;
  pronunciation: string;
}
const initialState: DictionaryState = {
  allWords: [],
  searchTerm: '',
  filterPartOfSpeech: '',
}

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord(state, action: PayloadAction<Word[]>) {
      state.allWords = action.payload
    },
    setSearchTerm(state, action: PayloadAction<string>) {
state.searchTerm = action.payload;
    },
    setFilterPartOfSpeech(state, action: PayloadAction<string>) {
      state.filterPartOfSpeech = action.payload
    },
  },
})

export const {actions: dictionaryAction, reducer: dictionaryReducer} = dictionarySlice

export const selectAllWords = (state: RootState) => state.dictionary.allWords;
export const selectSearchTerm = (state: RootState) => state.dictionary.searchTerm;
export const selectFilterPartOfSpeech = (state: RootState) => state.dictionary.filterPartOfSpeech;