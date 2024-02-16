import Image from "next/image"
import Link from "next/link"

import NavButton from "./NavButton"
import SearchBar from "./SearchBar"

export default function Navbar() {
  return (
    <nav 
      className="sticky z-10 flex items-center justify-between px-20 py-5 text-black drop-shadow-sm"
      style={{
        backgroundColor: "#fbe9cf",
      }}
    >
      <div className="flex items-center gap-8">
        <Link href={"/"} className="w-max -translate-y-1">
          <Image 
            src={"/bookworm_logo.png"} 
            alt="Bookworm logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '182px', height: 'auto' }}
          />
        </Link>
        <NavButton name="New Releases" href="/new"/>
        <NavButton name="Browse" hasDropdown>
          <p>Blog, genres, interviews, etc.</p>
        </NavButton>
        <NavButton name="My Collection" href="/collection"/>
      </div>
      <SearchBar/>
      <div className="flex gap-8 items-center">
        <NavButton name="Log In" href="/sign_in"/>
        <NavButton name="Sign Up" href="/sign_in"/>
      </div>
    </nav>
  )
}
