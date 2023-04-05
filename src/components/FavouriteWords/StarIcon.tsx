import { removeFromFavourites, Word } from "@/redux/dictionarySlice";
import { FavouriteWord } from "@/redux/favouritesSlice";
import { FC } from "react";
import { useDispatch } from "react-redux";
import StarRateIcon from "@mui/icons-material/StarRate";

const AddToFavorite: FC<{ word: Word }> = ({ word }) => {
  const dispatch = useDispatch();

  // const [favourites, setFavourites] = useState<FavouriteWord[]>([]);

  const savedFavourites = localStorage.getItem("favourites");
  const favourites: FavouriteWord[] = JSON.parse(savedFavourites || "[]");

  const removeFromLocalStorage = (word: FavouriteWord) => {
    const updatedFavourites = favourites.filter(
      (fav) => !(fav.definition === word.definition)
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const handleRemoveFromFavourites = (word: FavouriteWord) => {
    console.log("delete", word);
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
