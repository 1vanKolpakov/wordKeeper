import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
import { RootState } from "./store";
import { Word } from "./types";

interface SearchState {
  status: 'idle' | 'loading' | 'fulfilled' | 'failed';
  query: string;
  results: Array<any>
  error: string | null;
}

const initialState: SearchState = {
  status: 'idle',
  query: '',
  results: [],
  error: null,
};

export const searchWords = createAsyncThunk(
  'search/searchWords',
 async (query:string) => {
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    return response.data
 }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearResults: (state) => {
      state.results = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchWords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchWords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'что то пошло не так'
      })
      .addCase(searchWords.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.results = action.payload;
      })
  }
  //   searchWordsStart(state) {
  //     state.loading = true;
  //     state.error = null
  //   },
  //   searchWordSuccess(state, action: PayloadAction<Word[]>) {
  //     state.results = action.payload;
  //     state.loading = false;
  //     state.error = null
  //   },
  //   searchWordFailure(state, action: PayloadAction<string>) {
  //     state.loading = false;
  //     state.error = action.payload
  //   },
  // },
});

export const {
  setQuery, clearResults
} = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectSearchResults = (state: RootState) => state.search.results;
export const selectSearchError = (state: RootState) => state.search.error;
export const selectSearchQuery = (state: RootState) => state.search.query;