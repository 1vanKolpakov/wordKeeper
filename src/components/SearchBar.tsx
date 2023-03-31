import searchSlice, { searchWords } from "@/redux/searchSlice"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { debounce} from 'lodash'

export default function SearchBar() {
  const dispatch = useDispatch()

  const [searchWord, setSearchWord] = useState('')

  const handleSearch = debounce((query: string) => {
    dispatch(searchWords(query))
  }, 500)
  useEffect(() => {
    handleSearch(searchWord)
  }, [searchWord])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearchWord(e.target.value)
  }

  return (
    <form className="flex items-center px-4 py-8">
      <input
      value={searchWord}
      onChange={handleInput}
      className='px-4 pr-10 w-2/6 h-10 text-gray-500 bg-gray-10/10 rounded-lg focus:border-blue-900 paceholder:text-end' type='text' placeholder="&#128269;"/>
    </form>
  )
}
