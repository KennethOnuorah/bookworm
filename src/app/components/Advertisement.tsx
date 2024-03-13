'use client'

import Image from "next/image"
import Link from "next/link"

import useMobileDetection from "@/lib/useMobileDetection"
import { HTMLAttributeAnchorTarget } from "react"

type Props = {
  imageSrc: string
  imageSrcMobile: string
  href: string
  target: HTMLAttributeAnchorTarget 
}

export default function Advertisement({ imageSrc, imageSrcMobile, href, target } : Props) {
  const width = useMobileDetection()

  return (
    <Link href={href} target={target} rel="noopener noreferrer">
      <Image
        src={width > 500 ? imageSrc : imageSrcMobile}
        alt="Advertisement"
        width={0} height={0}
        sizes="100vw"
        className="my-16 w-full h-auto cursor-pointer"
        priority
      />
    </Link>
  )
}
