import { selectAllWords } from "@/redux/dictionarySlice"
import { AppDispatch, RootState } from "@/redux/store"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

 const FavouriteWordsSearchBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  // const [searchWord, setSearchWord] = useState('')
  // const debouncedSearch = useDebounce(searchWord, 1000)

  // useEffect(() => {
  //   if(searchWord !== ''){
  //   dispatch(searchWords(debouncedSearch))
  //   }
  // }, [debouncedSearch])

  // const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchWord(e.target.value)
  // }
  const options = useSelector((state: RootState) => selectAllWords(state))
  // опции для селекта
  const select = Array.from(new Set(options.map((option) => option.partOfSpeech)))
  console.log(select)
  return (
    <form className="flex flex-col justify-center items-start px-4 py-2 bg-gray-300 max-sm:w-full w-1/4 h-44 m-4 max-sm:m-0" >
      <input
      // value={searchWord}
      // onChange={handleInput}
      className='px-4 pr-10 top-10 my-4 w-full h-10 text-gray-500 bg-gray-10/10 rounded-lg focus:border-blue-900 paceholder:text-end' type='text' placeholder="&#128269;"/>
      {select.map((partOfspeech, i) => (
        <p key={i}>
          <input 
          type='checkbox'
          value={partOfspeech}
          name={partOfspeech} />
          <label>{partOfspeech}</label>
        </p>
      ))}
    </form>
  )
}

export default FavouriteWordsSearchBar;
