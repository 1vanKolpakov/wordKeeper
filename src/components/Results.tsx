import { selectSearchResults } from "@/redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { FC, useEffect, useState } from "react";
import { Definition, Meaning, SearchResult } from "@/types/types";
import {
  addToFavourites,
  addWords,
  removeFromFavourites,
} from "@/redux/dictionarySlice";
import WordList from "./WordList";
import { FavouriteWord } from "@/redux/types";

const Results: FC = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);

  const [favourites, setFavourites] = useState<FavouriteWord[]>([]);

  useEffect(() => {
    const savedFavourites = localStorage.getItem("favourites");
    if (savedFavourites) {
      const favouritesFromLocalStorage: FavouriteWord[] =
        JSON.parse(savedFavourites);
      setFavourites(favouritesFromLocalStorage);
      dispatch(addWords(favouritesFromLocalStorage));
    }
  }, []);

  const isFavourite = (word: FavouriteWord) => {
    return favourites.some((fav) => {
      return fav.definition === word.definition;
    });
  };

  const addToLocalStorage = (word: FavouriteWord) => {
    const updatedFavourites = [...favourites, word];
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites);
  };
  const removeFromLocalStorage = (word: FavouriteWord) => {
    const updatedFavourites = favourites.filter(
      (fav) => !(fav.definition === word.definition)
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites);
  };

  const handleToFavourites = (word: FavouriteWord) => {
    if (isFavourite(word)) {
      dispatch(removeFromFavourites(word));
      removeFromLocalStorage(word);
    } else {
      dispatch(addToFavourites(word));
      addToLocalStorage(word);
    }
  };

  return (
    <div className="max-sm:w-full max-sm:justify-center w-2/3">
      {searchResults.map((el: SearchResult, ind) => (
        <div key={`${el.id}-${el.word}- ${ind}`}>
          {el.meanings.map((one: Meaning, i) => (
            <div key={`${el.id}-${one.partOfSpeech} - ${i}`}>
              {one.definitions.map((word: Definition, index) => (
                <div
                  className=" flex justify-between  p-4 m-3 border  bg-white rounded"
                  key={`${el.id}-${one.partOfSpeech}- ${index}`}
                >
                  <WordList el={el} one={one} word={word} />
                  <div className=" flex justify-end ml-2 ">
                    {isFavourite({
                      definition: word.definition,
                      word: el.word,
                      partOfSpeech: one.partOfSpeech,
                    }) ? (
                      <span className=" hover:cursor-pointer">
                        <StarRateIcon
                          onClick={() =>
                            handleToFavourites({
                              definition: word.definition,
                              word: el.word,
                              partOfSpeech: one.partOfSpeech,
                            })
                          }
                          sx={{
                            "&:hover": {
                              color: "primary.main",
                            },
                            color: "primary.main",
                          }}
                        />
                      </span>
                    ) : (
                      <span className=" hover:cursor-pointer">
                        <StarBorderIcon
                          onClick={() =>
                            handleToFavourites({
                              definition: word.definition,
                              word: el.word,
                              partOfSpeech: one.partOfSpeech,
                            })
                          }
                          sx={{
                            "&:hover": {
                              color: "primary.main",
                            },
                            color: "primary",
                          }}
                        />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Results;
