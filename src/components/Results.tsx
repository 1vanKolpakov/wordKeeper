import { selectSearchResults } from "@/redux/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { FC, useEffect, useState } from "react";
import {addToFavourites, removeFromFavourites} from '../redux/favouritesSlice'
import type { FavouriteWord } from "../redux/favouritesSlice";
import { Definition, Meaning, SearchResult } from "@/types/types";

 const Results: FC = () =>  {
  const dispatch = useDispatch()
  const searchResults = useSelector(selectSearchResults)
  console.log(searchResults)

  const [favourites, setFavourites] = useState<string[]>([])
  useEffect(() => {
    const savedFavourites = localStorage.getItem('favourites');
    if(savedFavourites) {
      setFavourites(JSON.parse(savedFavourites))
    }
  }, [])

  const isFavourite = (word: FavouriteWord) => {
    return favourites.includes(word.definition)
  }

  const addToLocalStorage = (word: FavouriteWord) => {
    const updatedFavourites = [...favourites, word.definition]
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites))
    setFavourites(updatedFavourites);
  }

  const removeFromLocalStorage = (word: FavouriteWord) => {
    const updatedFavourites = favourites.filter((fav) => fav !== word.definition)
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites)
  }

  const handleToFavourites = (word: FavouriteWord) => {
    if(isFavourite(word)) {
      dispatch(removeFromFavourites(word))
      removeFromLocalStorage(word)
    } else {
    console.log(word);
    dispatch(addToFavourites(word))
    addToLocalStorage(word)
    }
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
              {isFavourite({
                definition: word.definition,
                word: el.word,
                partOfSpeech: one.partOfSpeech 
              }) ? (
                <span className=" hover:cursor-pointer"><StarRateIcon onClick={()=>handleToFavourites({
                  definition: word.definition,
                  word: el.word,
                  partOfSpeech: one.partOfSpeech
                })} sx={{ "&:hover": {
                  color: 'primary.main'
                }, 'color': 'primary.main'}}/></span>
              ) : (
                <span className=" hover:cursor-pointer"><StarBorderIcon onClick={()=>handleToFavourites({
                  definition: word.definition,
                  word: el.word,
                  partOfSpeech: one.partOfSpeech
                })} sx={{ "&:hover": {
                  color: 'primary.main'
                }, 'color': 'primary'}}/></span>
              )}
            
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