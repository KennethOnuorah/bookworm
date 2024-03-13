'use client'

import Image from "next/image"
import Link from "next/link"

import { useState, useRef, useEffect } from "react"
import useMobileDetection from "@/lib/useMobileDetection"

import HolidayBanner from "./HolidayBanner"
import NavLink from "./NavLink"
import SearchBar from "./SearchBar"
import BrowseDropdownContent from "./BrowseDropdownContent"

import { CiSearch } from "react-icons/ci"
import { PiUserCircleThin as Login } from "react-icons/pi"

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const searchBarRef = useRef<HTMLInputElement>(null)

  const [topOffset, setTopOffset] = useState(0)
  const [mobileSearchOpened, setMobileSearchOpened] = useState(false)
  
  const width = useMobileDetection()

  const navButtonContent = (
    <div className="flex gap-8 justify-center items-baseline xl:justify-start text-xs xs:text-base">
      <NavLink name="New Releases" href="/new"/>
      <NavLink name="Browse" hasDropdown>
        <BrowseDropdownContent/>
      </NavLink>
      <NavLink name="My Reviews" href="/reviews"/>
    </div>
  )

  useEffect(() => {
    if(!mobileSearchOpened) return
    searchBarRef.current?.focus()
  }, [mobileSearchOpened])

  return (
    <>
      <HolidayBanner action={setTopOffset}/>
      <nav
        ref={navRef}
        className="sticky z-20 flex items-center justify-between px-5 py-4 text-black drop-shadow-md xl:drop-shadow-sm sm:px-20"
        style={{
          backgroundColor: "#F4F2E9",
          top: `${topOffset}px`
        }}
      >
        {(!mobileSearchOpened && width <= 875) && 
          <button 
            className="transition-colors text-amber-950 hover:text-amber-600" 
            name="search"
            onClick={() => {
              if(mobileSearchOpened) return 
              setMobileSearchOpened(true)
            }}
          >
            <CiSearch className="size-5 xs:size-[25px]"/>
          </button>
        }
        <div className="flex items-center gap-8">
          {!mobileSearchOpened && 
            <Link href={"/"} className="w-max -translate-y-1">
              <Image
                src={"/images/bookworm_logo.png"}
                alt="Bookworm logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[130px] xs:w-[182px] h-auto"
                priority
              />
            </Link>
          }
          <div className="hidden xl:block">{navButtonContent}</div>
        </div>
        {((mobileSearchOpened && width <= 875) || width > 875) && 
          <SearchBar innerRef={searchBarRef} setSearchBarOpened={setMobileSearchOpened}/>
        }
        <div>
          <div className="hidden md2:flex gap-8">
            <NavLink name="Sign In" href="/sign_in" />
            <NavLink name="Join" href="/sign_in" />
          </div> 
          {!mobileSearchOpened && 
            <div className="flex md2:hidden gap-8">
              <NavLink name={<Login className="size-6 xs:size-[30px]"/>} href="/sign_in" />
            </div>
          }
        </div>
      </nav>
      <nav
        className="sticky z-[19] flex whitespace-nowrap items-center px-20 py-2 text-black drop-shadow-sm justify-evenly xl:hidden"
        style={{
          backgroundColor: "#F4F2E9",
          top: `${topOffset + (mobileSearchOpened ? 66 : width < 300 ? 60.41 : 71.74)}px`,
        }}
      >
        {navButtonContent}
      </nav>
    </>
  )
}
