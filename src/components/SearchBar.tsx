import { useDebounce } from "@/hooks/useDebounce"
import { searchWords } from "@/redux/searchSlice"
import { AppDispatch } from "@/redux/store"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>()

  const [searchWord, setSearchWord] = useState('')
  const debouncedSearch = useDebounce(searchWord, 1000)

  useEffect(() => {
    console.log('search', debouncedSearch)
    if(searchWord !== ''){
    dispatch(searchWords(debouncedSearch))
    }
  }, [debouncedSearch])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
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
