import Link from "next/link"
import { Divider } from "@mui/material"

import { sideLinks, genreLinks } from "@/helpers/browseLinks"

export default function BrowseDropdownContent() {
  return (
    <div className="flex w-screen sm2:w-auto">
      <div 
        className="text-black py-2 w-full sm2:w-auto"
        style={{
          backgroundColor: "#faf9f4"
        }}
      >
        <ul className="mt-2">
          {sideLinks.map((link, index) => 
            <li key={index} className="px-4 text-sm mb-4 mr-4 decoration-1 underline-offset-1 hover:underline text-center sm2:text-left">
              <Link href={link.href}>
                {link.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
      <Divider className="hidden sm2:block" orientation="vertical" flexItem />
      <div 
        className="text-black py-2 hidden sm2:block"
        style={{
          backgroundColor: "#F4F2E9"
        }}
      >
        <h3 className="font-semibold px-4 mb-[15px] mt-[5px]">
          Subjects
        </h3>
        <ul className="columns-2">
          {genreLinks.map((link, index) => 
            <li key={index} className="px-4 text-sm mb-4 mr-4 decoration-1 underline-offset-1 hover:underline">
              <Link href={link.href}>
                {link.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
