import { Word } from "../dictionarySlice";

export interface RootState {
  search: {
    query: string;
    results: Word[];
    loading: Boolean;
  };
  favourites: Word[];
  dictionary: {
    allWords: Word[];
    searchTerm: string;
    filterPartOfSpeech: string;
  };
}

export type FavouriteWord = {
  word: string;
  partOfSpeech: string;
  definition: string;
}
