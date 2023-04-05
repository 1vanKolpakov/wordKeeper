import { Definition, Meaning, SearchResult } from "@/types/types";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  el: SearchResult;
  one: Meaning;
  word: Definition;
}

const WordList: FC<Props> = ({ el, one, word }) => {
  const [fullOpen, setFullOpen] = useState<boolean>(false)

  const handleOpenFull =(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setFullOpen((prev) => prev = !prev)
  }
  return (
    <div onClick={handleOpenFull} className=" overflow-x-hidden cursor-pointer">
      {fullOpen ? (
        <>
        <span className=" font-bold">{el.word}</span>
      <span className="italic ml-2">{one.partOfSpeech}</span>
      <span className="ml-2 overflow-x-hidden">{word.definition}</span>
      <span className="flex font-bold justify-center">{el.phonetic}</span>
        </>
      ) : (
        <>
        <span className=" font-bold">{el.word}</span>
      <span className="italic ml-2">{one.partOfSpeech}</span>
      <span className="ml-2 truncate overflow-x-hidden">{word.definition}</span>
      </>
    
      )}
    </div>
  );
};

export default WordList;
