import { removeFromFavourites, Word } from "@/redux/dictionarySlice";
import { FC } from "react";
import { useDispatch } from "react-redux";
import StarRateIcon from "@mui/icons-material/StarRate";
import { FavouriteWord } from "@/redux/types";

const AddToFavorite: FC<{ word: Word }> = ({ word }) => {
  const dispatch = useDispatch();

  const savedFavourites = localStorage.getItem("favourites");
  const favourites: FavouriteWord[] = JSON.parse(savedFavourites || "[]");

  const removeFromLocalStorage = (word: FavouriteWord) => {
    const updatedFavourites = favourites.filter(
      (fav) => !(fav.definition === word.definition)
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const handleRemoveFromFavourites = (word: FavouriteWord) => {
    dispatch(removeFromFavourites(word));
    removeFromLocalStorage(word);
  };
  return (
    <div className=" flex justify-end ml-2 ">
      <span className=" hover:cursor-pointer">
        <StarRateIcon
          onClick={() =>
            handleRemoveFromFavourites({
              definition: word.definition,
              word: word.word,
              partOfSpeech: word.partOfSpeech,
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
    </div>
  );
};

export default AddToFavorite;
