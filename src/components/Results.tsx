import { selectSearchResults } from "@/redux/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FC } from "react";
import {addToFavourites} from '../redux/favouritesSlice'
import type { FavouriteWord } from "../redux/favouritesSlice";
import { Definition, Meaning, SearchResult } from "@/types/types";

 const Results: FC = () =>  {
  const dispatch = useDispatch()
  const searchResults = useSelector(selectSearchResults)
  console.log(searchResults)

  const handleToFavourites = (word: FavouriteWord) => {
    console.log(word);
    dispatch(addToFavourites(word))
  }
  return (
    <div className="max-sm:w-full max-sm:justify-center w-2/3">
      {searchResults.map((el: SearchResult) => (
        <div key={`${el.id}-${el.word}`}>
        {el.meanings.map((one: Meaning, i) => (
          <div key={`${el.id}-${one.partOfSpeech} - ${i}`}>
          {one.definitions.map((word: Definition, index) => (
            <div className=" flex justify-between  p-4 m-3 border  bg-white rounded" key={ `${el.id}-${one.partOfSpeech}- ${index}`}>
            <div className=" overflow-x-hidden">
            <span className=" font-bold">{el.word}</span>
            <span className="italic ml-2">{one.partOfSpeech}</span>
            <span className="ml-2 truncate overflow-x-hidden">{word.definition}</span>
            </div>
            <div className=" flex justify-end ml-2 ">
            <span className=" hover:cursor-pointer"><StarBorderIcon onClick={()=>handleToFavourites({
              definition: word.definition,
              word: el.word,
              partOfSpeech: one.partOfSpeech
            })} sx={{ "&:hover": {
              color: 'primary.main'
            }, 'color': 'primary'}}/></span>
            </div>
            </div>
            
          ))}
          </div>
        ))}
        </div>
      ))}
    </div>
  )
}

export default Results;