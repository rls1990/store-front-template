"use client";

import { navItems } from "@/data/nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavItems = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const selectItem = (name: string) => {
    return name === pathname
      ? " border-primary-light text-emerald-900"
      : " border-transparent text-gray-400";
  };

  const selectItemCell = (name: string) => {
    return name === pathname
      ? " bg-emerald-50 border-emerald-500 text-emerald-700"
      : " border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800";
  };

  return (
    <div className={`flex flex-col h-full`}>
      <div className="flex flex-col h-auto">
        {/* button */}
        <div
          className={`sm:hidden flex items-center justify-center h-auto mr-3 mt-3`}
        >
          <button
            type="button"
            id="mobile-menu-button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className={`h-6 w-6 ${!menuOpen ? "block" : "hidden"}`}
              id="menu-open-icon"
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
            <svg
              className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
              id="menu-close-icon"
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
        {/* pc */}
        <div className="h-[69px] hidden sm:block">
          <div className="flex flex-col items-center sm:flex-row text-center h-full">
            {navItems.map((item, index) => (
              <Link
                key={index + item.name}
                href={item.url}
                className={
                  "hover:border-gray-300 hover:text-gray-800 font-medium l inline-flex items-center justify-center px-1 pt-1 border-b-3 text-sm h-full w-22" +
                  selectItem(item.url)
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* cell */}
      <div
        className={`sm:hidden overflow-y-hidden transition-all  ${
          menuOpen ? "h-60" : "h-0"
        }`}
      ></div>

      <div
        className={`absolute left-0 w-full top-15 sm:hidden ${
          !menuOpen && "hidden"
        }`}
      >
        <div className="pt-2 pb-3 space-y-1 w-full">
          {navItems.map((item, index) => (
            <Link
              key={index + item.name + "cell"}
              href={item.url}
              className={
                "block pl-3 pr-4 py-2 border-l-4 text-base font-medium fade-in" +
                selectItemCell(item.url)
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavItems;
