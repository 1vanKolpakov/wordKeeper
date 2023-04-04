import { selectAllWords, Word } from "@/redux/dictionarySlice";
import { FavouriteWord } from "@/redux/favouritesSlice";
import { AppDispatch, RootState } from "@/redux/store"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddToFavorite from "./StarIcon";

const FavouriteWordsResult: FC = () => {
const dispatch = useDispatch<AppDispatch>();
const words = useSelector((state: RootState) => selectAllWords(state))
useEffect(() => {
  console.log('favouriteWords', words)
})


  return (
    <div className="max-sm:w-full max-sm:justify-center w-2/3">

{words.map((word, index) => (
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
                  <AddToFavorite />
                  {/* <div className=" flex justify-end ml-2 ">
                    
                  </div> */}
                </div>
              ))}

      </div>
  )
}

export default FavouriteWordsResult;