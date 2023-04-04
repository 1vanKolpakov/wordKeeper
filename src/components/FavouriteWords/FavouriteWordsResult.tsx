import { selectAllWords, Word } from "@/redux/dictionarySlice";
import { ChangeEvent, FC, useEffect, useState } from "react";
import AddToFavorite from "./StarIcon";

const FavouriteWordsResult: FC<{filteredWords: Word[]}> = ({filteredWords}) => {


  return (
    <div className="max-sm:w-full max-sm:justify-center w-2/3">
      {filteredWords.map((word, index) => (
        <div
          className=" flex justify-between  p-4 m-3 border  bg-white rounded"
          key={`${word.partOfSpeech}- ${index}`}
        >
          <div className=" overflow-x-hidden">
            <span className=" font-bold">{word.word}</span>
            <span className="italic ml-2">{word.partOfSpeech}</span>
            <span className="ml-2 truncate overflow-x-hidden">
              {word.definition}
            </span>
          </div>
          <AddToFavorite word={word} />
        </div>
      ))}
    </div>
  );
};

export default FavouriteWordsResult;
