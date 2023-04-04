import { addWords } from "@/redux/dictionarySlice";
import { FavouriteWord } from "@/redux/favouritesSlice";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StarRateIcon from "@mui/icons-material/StarRate";

const AddToFavorite: FC = () => {
  const dispatch = useDispatch();

  const [favourites, setFavourites] = useState<FavouriteWord[]>([]);

  // useEffect(() => {
  //   const savedFavourites = localStorage.getItem("favourites");
  //   if (savedFavourites) {
  //     const favouritesFromLocalStorage: FavouriteWord[] =
  //       JSON.parse(savedFavourites);
  //     console.log("in local stor", favouritesFromLocalStorage);
  //     setFavourites(favouritesFromLocalStorage);
  //     dispatch(addWords(favouritesFromLocalStorage));
  //   }
  // }, []);

  // const isFavourite = (word: FavouriteWord) => {
  //   return favourites.some((fav) => {
  //     return fav.definition === word.definition;
  //   });
  // };
  return (
    <div className=" flex justify-end ml-2 ">
      <span className=" hover:cursor-pointer">
        <StarRateIcon
          // onClick={() =>
          //   handleToFavourites({
          //     definition: word.definition,
          //     word: el.word,
          //     partOfSpeech: one.partOfSpeech,
          //   })
          // }
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
