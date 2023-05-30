import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className="z-10 w-full absolute">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <a
                href="#home"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  {/* <div className="h-4 w-4 rounded-full bg-white"></div>
                  <div className="h-6 w-2 bg-primary"></div> */}
                  <img
                    src="/Group2.svg"
                    alt="Vomentor logo"
                    height={35}
                    width={35}
                  />
                </div>
                <span className="text-2xl font-bold text-white">Vomentor</span>
              </a>

              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden bg-gray-900/70"
            ></div>
            <div
              className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            shadow-none bg-gray-800 border-gray-700"
            >
              <div className="text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <a
                      href="#features"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Docs</span>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#solution"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Solution</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Testimonials</span>
                    </a>
                  </li> */}
                  <li>
                    <Link
                      to={'/workspace'}
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Workspace</span>
                    </Link>
                    {/* <a
                      href="#blog"
                      className="block md:px-4 transition hover:text-primary"
                    >
                    </a> */}
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="#"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar

// <nav className="px-2 bg-gray-900 border-gray-700">
//   <div classNameName="container flex flex-wrap items-center justify-between mx-auto">
//     <a href="" classNameName="flex items-center">
//       <img
//         src="../../public/Group2.svg"
//         classNameName="h-14 mr-3 sm:h-10"
//         alt="Vomentor"
//       />
//       <span classNameName="self-center text-xl font-semibold whitespace-nowrap text-white">
//         Vomentor
//       </span>
//     </a>
//     <button
//       data-collapse-toggle="navbar-dropdown"
//       type="button"
//       classNameName="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-400 "
//       aria-controls="navbar-dropdown"
//       aria-expanded="false"
//     >
//       <span classNameName="sr-only">Open main menu</span>
//       <svg
//         classNameName="w-6 h-6"
//         aria-hidden="true"
//         fill="currentColor"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fillRule="evenodd"
//           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//           clipRule="evenodd"
//         ></path>
//       </svg>
//     </button>
//     <div classNameName="hidden w-full md:block md:w-auto" id="navbar-dropdown">
//       <ul classNameName="flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 ">
//         <li>
//           <Link
//             to={'/'}
//             classNameName={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
//               rootLocation === '/' ? 'text-white' : 'text-gray-400'
//             } md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}
//           >
//             Home
//           </Link>
//         </li>

//         <li>
// <Link
//   to={'/workspace'}
//   classNameName={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
//     rootLocation === '/chill' ? 'text-white' : 'text-gray-400'
//   } md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}
// >
//   Chill
// </Link>
//         </li>
//         <li>
//           <a
//             href=""
//             classNameName="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
//           >
//             Watch
//           </a>
//         </li>
//         <li>
//           <a
//             href=""
//             classNameName="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
//           >
//             Chat
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
