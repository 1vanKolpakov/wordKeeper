import { Word } from "@/redux/dictionarySlice";
import { FC, useState } from "react";
import AddToFavorite from "./StarIcon";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

type WordsOrder = number[];

const FavouriteWordsResult: FC<{filteredWords: Word[]}> = ({filteredWords}) => {
  const [wordsOrder, setWordsOrder] = useState(filteredWords)
  // );
  // console.log('wordsORDER', wordsOrder)

  // const onDragEnd = (result: any) => {
  //   if (!result.destination) {
  //     return;
  //   }

  //   const { source, destination } = result;

  //   const newWordsOrder = Array.from(wordsOrder);
  //   newWordsOrder.splice(source.index, 1);
  //   newWordsOrder.splice(destination.index, 0, wordsOrder[source.index]);

  //   setWordsOrder(newWordsOrder);
  // };
  const [currentWord, setCurrentWord] = useState(null)
  function dragStartHandler(e, word) {
    console.log('DRAG', word)
    setCurrentWord(word)
  }

  function dragEndHandler(e) {
    // e.target.parentNode.parentNode.style.border = 'none'
    e.target.style.background = 'white'
  }

  function dragOverHandler(e) {
    e.preventDefault()
    // e.target.parentNode.parentNode.style.border = '2px solid red'
    e.target.style.background = 'lightgrey'
    e.stopPropagation()
  }

  return (
    <div className="max-sm:w-full max-sm:justify-center w-2/3">
      {wordsOrder.map((word, index) => (
        <div 
          onDragStart={(e) => dragStartHandler(e, word)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          // onDrop={(e) => dropHandler(e, word)}


          draggable={true}
          className=" flex justify-between  p-4 m-3 border  bg-white rounded"
          key={`${word.partOfSpeech}- ${index}`}
        >
          <div className=" overflow-x-hidden"
          >
            <span className=" font-bold">{word.word}</span>
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
