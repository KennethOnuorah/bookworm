import Image from "next/image"
import Link from "next/link"

import NavLink from "./NavLink"
import SearchBar from "./SearchBar"

import { CiSearch, CiLogin } from "react-icons/ci";

export default function Navbar() {
  const navButtonContent = (
    <div className="flex gap-8 justify-center xl:justify-start">
      <NavLink name="New Releases" href="/new"/>
      <NavLink name="Browse" hasDropdown>
        <p>Blog, genres, interviews, etc.</p>
      </NavLink>
      <NavLink name="My Collection" href="/collection"/>
    </div>
  )

  return (
    <>
      <nav
        className="sticky top-0 z-20 flex items-center justify-between px-5 py-4 text-black drop-shadow-md xl:drop-shadow-sm sm:px-20"
        style={{
          backgroundColor: "#F4F2E9",
        }}
      >
        <button
          className="block md2:hidden transition-colors text-amber-950 hover:text-amber-600"
          name="search"
        >
          <CiSearch size={25} />
        </button>
        <div className="flex items-center gap-8">
          <Link href={"/"} className="w-max -translate-y-1">
            <Image
              src={"/images/bookworm_logo.png"}
              alt="Bookworm logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{width: "182px", height: "auto"}}
              priority
            />
          </Link>
          <div className="hidden xl:block">{navButtonContent}</div>
        </div>
        <SearchBar />
        <div>
          <div className="hidden md2:flex gap-8">
            <NavLink name="Sign In" href="/sign_in" />
            <NavLink name="Join" href="/sign_in" />
          </div> 
          <div className="flex md2:hidden gap-8">
            <NavLink name={<CiLogin size={25}/>} href="/sign_in" />
          </div>
        </div>
      </nav>
      <nav
        className="sticky z-10 flex whitespace-nowrap items-center px-20 py-2 text-black drop-shadow-sm justify-evenly xl:hidden"
        style={{
          backgroundColor: "#F4F2E9",
          top: '71.74px'
        }}
      >
        {navButtonContent}
      </nav>
    </>
  )
}
