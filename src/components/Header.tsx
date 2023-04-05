import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-blue-400 border-b-2 border-gray-300">
      <Link href='/'>
        <p className='py-4 border-0 px-8 text-white font-bold rounded-3xl transition duration-500 ease-in-out hover:bg-blue-500 active:bg-blue-600 active:text-white'>Word Keeper</p>
      </Link>
      <Link href='/starred'>

      <p className='py-4 border-0 px-8 text-white font-bold rounded-3xl transition duration-500 ease-in-out hover:bg-blue-500 active:bg-blue-600 active:text-white'>Starred words</p>
      </Link>
    </header>
  )
}
