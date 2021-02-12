import { useState } from "react"
import Link from "next/link"

function Header( { email, signOut }) {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img
                className="h-8 w-auto sm:h-14"
                src="logo.svg"
                alt=""
              ></img>
            </a>
          </div>
          {!isOpen &&
            <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => {setIsOpen(!isOpen)}}
              className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          }
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          { email ? (
            <>
            <Link href="/user">
              <a
                className="text-base font-extrabold border border-transparent px-4 py-2 mx-6 rounded-md text-gray-900 bg-secondary hover:text-secondary hover:bg-gray-900">
              My profile
              </a>
            </Link>
            <button
              type="button"
              onClick={()=>{signOut()}}
              className="whitespace-nowrap text-base font-extrabold border border-transparent px-4 py-2 rounded-md shadow-sm text-gray-900 bg-primary hover:bg-gray-900 hover:text-primary">
            Logout
            </button>
            </>
          ) : (
            <>
            <Link href="/auth">
              <a
                className="text-base font-extrabold border border-transparent px-4 py-2 rounded-md text-gray-900 bg-primary hover:text-primary hover:bg-gray-900">
              Login
              </a>
            </Link>
            </>
          )}
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
    { isOpen &&
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 ">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="logo.svg"
                  alt=""
                ></img>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => {setIsOpen(!isOpen)}}
                  className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <!-- Heroicon name: x --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
          { email ? (
            <>
            <Link href='/user'>
              <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-primary hover:text-primary hover:bg-gray-900">
                My profile
              </a>
            </Link>
            <button
             type="button"
             onClick={()=>{signOut()}}
             className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-secondary hover:bg-primary">
            Logout
            </button>
            </>
          ) : (
            <>
            <Link href="/auth">
              <a className=" w-full flex items-center justify-center text-gray-900 bg-primary border border-transparent px-2 py-2 font-base rounded-md hover:text-black hover:bg-secondary">
                Login
              </a>
            </Link>
            </>
          )}
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default Header
