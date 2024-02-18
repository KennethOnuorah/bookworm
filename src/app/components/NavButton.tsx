'use client'

import Link from "next/link"
import { useState, useRef, CSSProperties } from "react"

import useViewportDimensions from "@/lib/useViewportDimensions"
import { Menu } from "@mui/material"

type Props = {
  name: string
  href?: never
  hasDropdown?: true
  children: React.ReactNode
} | {
  name: string
  href: string
  hasDropdown?: false
  children?: never
}

export default function NavButton({ name, href, hasDropdown, children } : Props) {
  const {width,} = useViewportDimensions()
  const [menuOpened, setMenuOpened] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <>   
      {hasDropdown ? 
        <button 
          className="transition-colors flex items-baseline gap-1 cursor-pointer font-light text-lg text-amber-950 hover:text-amber-600"
          ref={ref}
          name={name}
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
          className="transition-colors flex items-baseline gap-1 cursor-pointer font-light text-lg text-amber-950 hover:text-amber-600"
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
              backgroundColor: "#fbe9cf",
            },
          }}
        >
          {children}
        </Menu>}
    </>
  )
}
