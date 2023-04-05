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
    if(searchWord !== ''){
    dispatch(searchWords(debouncedSearch))
    }
  }, [debouncedSearch])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  return (
    <form className="flex px-4 top-1 py-7 bg-gray-300 max-sm:w-full w-1/4 h-44 m-4 max-sm:m-0" >
      <input
      value={searchWord}
      onChange={handleInput}
      className='px-4 pr-10 w-full h-10 text-gray-500 bg-gray-10/10 rounded-lg focus:border-blue-900' type='text' placeholder="&#128269;"/>
    </form>
  )
}
