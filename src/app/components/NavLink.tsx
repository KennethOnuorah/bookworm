'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

import { useWindowSize } from "react-use"
import { Menu } from "@mui/material"

type Props = {
  name: string | React.ReactNode
  href?: never
  hasDropdown?: true
  children: React.ReactNode
} | {
  name: string | React.ReactNode
  href: string
  hasDropdown?: false
  children?: never
}

export default function NavLink({ name, href, hasDropdown, children } : Props) {
  const {width,} = useWindowSize()
  const [menuOpened, setMenuOpened] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  const pathname = usePathname()

  useEffect(() => {
    setMenuOpened(false)
  }, [pathname])

  return (
    <>   
      {hasDropdown ? 
        <button 
          className="transition-colors flex items-center gap-1 cursor-pointer font-light text-amber-950 hover:text-amber-600 text-md sm:text-lg"
          ref={ref}
          name={name as string}
          onClick={() => hasDropdown && setMenuOpened(true)}
        >
          {name} 
          <span className="text-base">
            {hasDropdown && (menuOpened ? "▴" : "▾")}
          </span>
        </button> :
        <Link
          href={href!}
          className="transition-colors flex items-baseline gap-1 cursor-pointer font-light text-amber-950 hover:text-amber-600 text-md sm:text-lg"
        >
          {name}
        </Link>}
      {hasDropdown &&
        <Menu 
          open={menuOpened} 
          onClose={() => setMenuOpened(false)}
          anchorEl={ref.current}
          anchorOrigin={{vertical: "bottom", horizontal: "left"}}
          disableScrollLock
          sx={{
            '& .MuiMenu-paper': {
              marginTop: width > 1280 ? "19px" : "7px",
              borderRadius: '0px',
              backgroundColor: "#F4F2E9",
              boxShadow: "0 15px 12px 4px rgba(0, 0, 0, 0.125)",
            },
            '& .css-6hp17o-MuiList-root-MuiMenu-list': {
              paddingTop: '2.25px',
              paddingBottom: 0,
            }
          }}
        >
          {children}
        </Menu>}
    </>
  )
}
