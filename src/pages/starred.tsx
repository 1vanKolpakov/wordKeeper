import FavouriteWordsSearchBar from "@/components/FavouriteWords/FavouriteSearchBar";
import FavouriteWordsResult from "@/components/FavouriteWords/FavouriteWordsResult";
import Header from "@/components/Header";
import { selectAllWords } from "@/redux/dictionarySlice";
import { RootState } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

export default function Starred() {
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState<string[]>(
    []
  );
  const [searchTherm, setSearchTherm] = useState("");

  const filterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const partOfSpeech = e.target.value;

    const newSelector = selectedPartOfSpeech.includes(partOfSpeech)
      ? selectedPartOfSpeech.filter((p) => p !== partOfSpeech)
      : [...selectedPartOfSpeech, partOfSpeech];

    setSelectedPartOfSpeech(newSelector);
  };

  const handleSearchTherm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTherm(e.target.value);
  };

  const words = useSelector((state: RootState) => selectAllWords(state));

  const filteredWords = words
    .filter((word) => {
      if (selectedPartOfSpeech.length === 0) {
        return true;
      }
      return selectedPartOfSpeech.includes(word.partOfSpeech);
    })
    .filter((word) =>
      word.word.toLowerCase().includes(searchTherm.toLowerCase())
    );
  return (
    <>
      <Header />
      <div className="shrink-0 flex max-sm:flex-col justify-center w-full  ">
        <FavouriteWordsSearchBar
          filterHandler={filterHandler}
          handleSearchTherm={handleSearchTherm}
        />
        <FavouriteWordsResult
          filteredWords={filteredWords}
          selectedPartOfSpeech={selectedPartOfSpeech}
          searchTherm={searchTherm}
        />
      </div>
    </>
  );
}
