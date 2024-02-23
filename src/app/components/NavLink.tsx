'use client'

import Link from "next/link"
import { useState, useRef } from "react"

import useViewportDimensions from "@/lib/useViewportDimensions"
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
  const {width,} = useViewportDimensions()
  const [menuOpened, setMenuOpened] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <>   
      {hasDropdown ? 
        <button 
          className="transition-colors flex items-baseline gap-1 cursor-pointer font-light text-amber-950 hover:text-amber-600 text-md sm:text-lg"
          ref={ref}
          name={name as string}
          onClick={() => {
            if(hasDropdown) setMenuOpened(true)
          }}
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
          sx={{
            '& .MuiMenu-paper': {
              marginTop: width > 1280 ? "19px" : "7px",
              borderRadius: '0px',
              padding: "20px",
              boxShadow: "none",
              backgroundColor: "#F4F2E9",
            },
          }}
        >
          {children}
        </Menu>}
    </>
  )
}
