export interface SearchResult {
  word: string;
  meanings: Meaning[]
  id:number;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface Definition {
  definition: string;
}