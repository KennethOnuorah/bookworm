import Image from "next/image"
import Link from "next/link"

type Props = {
  src: string
  href: string
}

export default function Advertisement({ src, href }:Props) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt="Advertisement"
        width={0} height={0}
        sizes="100vw"
        className="my-16 w-full h-auto cursor-pointer"
      />
    </Link>
  )
}
