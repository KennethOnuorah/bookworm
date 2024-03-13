'use client'

import { useEffect, useRef, useState } from "react";

import Link from "next/link"
import Image from "next/image";

import useMobileDetection from "@/lib/useMobileDetection";
import { Popover } from "@mui/material";
import { RxTriangleLeft as Arrow } from "react-icons/rx";

type Props = {
  title: string
  author: string[]
  description: string
  coverURL: string
  totalScrolls: number
}

export default function BookSlide({title, author, description, coverURL, totalScrolls} : Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const open = anchorEl !== null

  const [side, setSide] = useState<"left" | "right">("right")
  const xPosition = imageRef.current?.getBoundingClientRect().x!

  const width = useMobileDetection()

  useEffect(() => {
    setSide(xPosition > window.innerWidth / 2 ? "right" : "left")
  }, [totalScrolls])

  const parsedDescription = description.replace(/<[^>]+>/g, ' ').replaceAll('&quot;', "\"").replaceAll(' , ', ', ')

  return (
    <>
      <Link href={`/books/${title}`}>
        <Image
          src={`${coverURL}`}
          ref={imageRef}
          alt={`Front cover of "${title}" by ${author}`}
          width={0} height={0}
          sizes="100vw"
          className="w-[400px] h-auto cursor-pointer"
          priority
          onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
          onMouseLeave={() => setAnchorEl(null)}
        />
      </Link>
      {width > 500 &&
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: side === 'right' ? 'left' : 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: side
          }}
          disableScrollLock
          disableRestoreFocus
          style={{ pointerEvents: 'none' }}
          sx={{
            '& .css-3bmhjh-MuiPaper-root-MuiPopover-paper': {
              paddingY: '20px',
              paddingX: '10px',
              marginLeft: side === 'right' ? '-20px' : '20px',
              borderRadius: '5px',
              border: '5px solid #E4D7CF',
              maxWidth: '300px',
              boxShadow: 'none',
              overflow: 'visible'
            }
          }}
        >
          <Arrow 
            className={`z-10 absolute top-1/3 ${side === 'right' ? 'translate-x-[1.43rem] right-0 rotate-180' : '-translate-x-[1.43rem] left-0 rotate-0'}`}
            color="#E4D7CF" 
            size={30}
          />
          <h1 className="font-bold">{title}</h1>
          <h2 className="text-sm text-gray-500">by {author.join(', ')}</h2>
          <hr className="my-2"/>
          <p className="text-xs text-gray-500">
            {parsedDescription.length < 200 ? parsedDescription : parsedDescription.slice(0, 200)}...
          </p>
        </Popover>
      }
    </>
  )
}
