import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  rootLocation: string | undefined | null
  setRootLocation: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >
}

const Navbar = ({ rootLocation, setRootLocation }: Props) => {
  const location = useLocation()

  return (
    <nav className="px-2 bg-gray-900 border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="" className="flex items-center">
          <img
            src="../../public/logo.svg"
            className="h-14 mr-1 sm:h-10"
            alt="Bingee"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Bingee
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-400 "
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 ">
            <li>
              <Link
                to={'/'}
                className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                  rootLocation === '/' ? 'text-white' : 'text-gray-400'
                } md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to={'/workspace'}
                className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                  rootLocation === '/chill' ? 'text-white' : 'text-gray-400'
                } md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}
              >
                Chill
              </Link>
            </li>
            <li>
              <a
                href=""
                className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Watch
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
