export interface Word {
  id: number;
  term: string;
  partOfSpeech: string;
  definition: string;
  pronunciation: string;
}

// export type WordState = {
//   allWords: Word[];
//   starredWords: Word[];
//   searchTerm: string;
//   filterPartOfSpeech: string;
// }

export interface RootState {
  search: {
    query: string;
    results: Word[];
    loading: Boolean;
  };
  favourites: Word[];
}

// export interface Action<T> {
//   type: string;
//   payload?: T;
// }

