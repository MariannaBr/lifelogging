import { useState } from "react"

function HeaderUser() {

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
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <a
              href="/user"
              className="whitespace-nowrap text-base font-extrabold border border-transparent px-4 py-2 rounded-md shadow-sm text-gray-900 bg-secondary hover:bg-gray-900 hover:text-primary"
            >
            Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderUser
