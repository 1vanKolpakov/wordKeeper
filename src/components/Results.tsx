import { selectSearchResults } from "@/redux/searchSlice"
import { useSelector } from "react-redux"
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Results() {
  const searchResults = useSelector(selectSearchResults)
  console.log(searchResults)

  const addToFavourites = (el, one, word) => {
    const favouriteWord = {
      word: el.word,
      partOfSpeech: one.partOfSpeech,

    }
    console.log(el);
  }
  return (
    <div className="max-sm:w-full max-sm:justify-center w-2/3">
      {searchResults.map((el) => (
        <>
        {/* <p key={el.id}>{el.word} {el.phonetic}</p> */}
        {el.meanings.map((one, i) => (
          <>
          {/* <p>{one.partOfSpeech}</p> */}
          {one.definitions.map((word, index) => (
            <p className=" flex justify-between  p-4 m-3 border  bg-white rounded" key={index}>
            <div className=" overflow-x-hidden">
            <span className=" font-bold">{el.word}</span>
            <span className="italic ml-2">{one.partOfSpeech}</span>
            <span className="ml-2 truncate overflow-x-hidden">{word.definition}</span>
            </div>
            <div className=" flex justify-end ml-2 ">
            <span className=" hover:cursor-pointer"><StarBorderIcon onClick={()=>addToFavourites(el, one, word)} sx={{ "&:hover": {
              color: 'primary.main'
            }, 'color': 'primary'}}/></span>
            </div>
            </p>
            
          ))}
          </>
        ))}
        </>
      ))}
    </div>
  )
}
