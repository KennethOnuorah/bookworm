"use client"

import Image from "next/image"
import Link from "next/link"

import useViewportDimensions from "@/lib/useViewportDimensions"

import NavButton from "./NavButton"
import SearchBar from "./SearchBar"

import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const {width,} = useViewportDimensions()

  const navButtonContent = (
    <div className="flex gap-8 justify-center xl:justify-start">
      <NavButton name="New Releases" href="/new"/>
      <NavButton name="Browse" hasDropdown>
        <p>Blog, genres, interviews, etc.</p>
      </NavButton>
      <NavButton name="My Collection" href="/collection"/>
    </div>
  )

  return (
    <>
      <nav
        className={`sticky z-20 flex items-center justify-between px-5 py-4 text-black drop-shadow-md xl:drop-shadow-sm sm:px-20`}
        style={{
          backgroundColor: "#fbe9cf",
        }}
      >
        <button
          className={`${width >= 875 ? "hidden" : "block"} transition-colors text-amber-950 hover:text-amber-600`}
          name="search"
        >
          <CiSearch size={25} />
        </button>
        <div className="flex items-center gap-8">
          <Link href={"/"} className="w-max -translate-y-1">
            <Image
              src={"/bookworm_logo.png"}
              alt="Bookworm logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{width: "182px", height: "auto"}}
            />
          </Link>
          {875 < width && width < 1280 && <SearchBar />}
          {width > 1280 && navButtonContent}
        </div>
        {width >= 1280 && <SearchBar />}
        <div className="flex gap-8 items-center">
          {width > 875 ? 
            <>
              <NavButton name="Sign In" href="/sign_in" />
              <NavButton name="Join" href="/sign_in" />
            </> :
            <NavButton 
              name="Sign Up" 
              href="/sign_in"
            />
          }
        </div>
      </nav>
      {width < 1280 && (
        <nav
          className="sticky z-10 flex whitespace-nowrap items-center px-20 py-2 text-black drop-shadow-sm justify-evenly"
          style={{
            backgroundColor: "#fbe9cf",
          }}
        >
          {navButtonContent}
        </nav>
      )}
    </>
  )
}
