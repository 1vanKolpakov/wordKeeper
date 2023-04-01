import { selectSearchResults } from "@/redux/searchSlice"
import { useSelector } from "react-redux"

export default function Results() {
  const searchResults = useSelector(selectSearchResults)
  console.log(searchResults)
  return (
    <div>
      {/* {searchResults ? (
        searchResults.map((el) => (
          <p>{el.word}</p>
        ))
      ) : (
        <p>нет слов<p/>
      )} */}
    </div>
  )
}
