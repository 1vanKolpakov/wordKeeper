import FavouriteWordsSearchBar from "@/components/FavouriteWords/FavouriteSearchBar";
import FavouriteWordsResult from "@/components/FavouriteWords/FavouriteWordsResult";
import Header from "@/components/Header";

export default function Starred() {
  return (
    <>
    <Header />
    <div className='shrink-0 flex max-sm:flex-col justify-center w-full  '>
    <FavouriteWordsSearchBar />
    <FavouriteWordsResult />
    </div>
    
  </>
  )
}
