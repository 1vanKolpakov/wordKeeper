import { Word } from "@/redux/dictionarySlice";
import { FC, useState } from "react";
import AddToFavorite from "./StarIcon";

interface Props {
  filteredWords: Word[];
  selectedPartOfSpeech: string[];
  searchTherm: string;
}

const FavouriteWordsResult: FC<Props> = ({
  filteredWords,
  selectedPartOfSpeech,
  searchTherm,
}) => {
  const [wordsOrder, setWordsOrder] = useState(
    filteredWords.map((word, index) => index)
  );
  const [currentWordIndex, setCurrentWordIndex] = useState<any>(null);

  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setCurrentWordIndex(index);
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    setCurrentWordIndex(null);
  };

  const dragOverHandler = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const dragWordIndex = wordsOrder[dragIndex];
    const newWordsOrder = [...wordsOrder];
    newWordsOrder.splice(dragIndex, 1);
    newWordsOrder.splice(index, 0, dragWordIndex);
    setWordsOrder(newWordsOrder);
  };

  const filteredAndSortedWords = filteredWords
    .filter((word) => {
      if (selectedPartOfSpeech.length === 0) {
        return true;
      }
      return selectedPartOfSpeech.includes(word.partOfSpeech);
    })
    .filter((word) =>
      word.word.toLowerCase().includes(searchTherm.toLowerCase())
    )
    .sort((a, b) => {
      const indexA = wordsOrder.indexOf(filteredWords.indexOf(a));
      const indexB = wordsOrder.indexOf(filteredWords.indexOf(b));
      return indexA - indexB;
    });

  return (
    <div className="max-sm:w-full max-sm:justify-center w-2/3">
      {filteredAndSortedWords.map((word) => (
        <div
          key={`${word.word}-${filteredWords.indexOf(word)}`}
          draggable
          onDragStart={(e) => dragStartHandler(e, filteredWords.indexOf(word))}
          onDragEnd={dragEndHandler}
          onDragOver={(e) => dragOverHandler(e, filteredWords.indexOf(word))}
          onDrop={(e) => dropHandler(e, filteredWords.indexOf(word))}
          className="flex justify-between p-4 m-3 border bg-white rounded"
        >
          <div className="overflow-x-hidden">
            <span className="font-bold">{word.word}</span>
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
