import { selectAllWords } from "@/redux/dictionarySlice";
import { RootState } from "@/redux/store";
import { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";

const FavouriteWordsSearchBar: FC<{
  handleSearchTherm: (e: ChangeEvent<HTMLInputElement>) => void;
  filterHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ handleSearchTherm, filterHandler }) => {
  const options = useSelector((state: RootState) => selectAllWords(state));
  // опции для селекта
  const select = Array.from(
    new Set(options.map((option) => option.partOfSpeech))
  );
  return (
    <form className="flex max-h-fit flex-col px-4 top-1 py-3 bg-gray-300 max-sm:w-full w-1/4 m-4 max-sm:m-0">
      <input
        onChange={handleSearchTherm}
        className="px-4 pr-10 my-4 w-full h-10 text-gray-500 bg-gray-10/10 rounded-lg focus:border-blue-900 paceholder:text-end"
        type="text"
        placeholder="&#128269;"
      />
      <span>Favourites Words</span>
      {select.map((partOfspeech, i) => (
        <p className="mt-2" key={i}>
          <input
            type="checkbox"
            value={partOfspeech}
            onChange={filterHandler}
            name={partOfspeech}
          />
          <label>{partOfspeech}</label>
        </p>
      ))}
    </form>
  );
};

export default FavouriteWordsSearchBar;
