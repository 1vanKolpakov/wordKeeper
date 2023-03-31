import Link from 'next/link'
export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-blue-400 border-b-2 border-gray-300">
      <Link href='/'>
        <p className='py-4 px-8 hover:text-gray-800 hover:bg-white'>Word Keeper</p>
      </Link>
      <Link href='/starred'>
        
      Starred words
      </Link>
    </header>
  )
}
