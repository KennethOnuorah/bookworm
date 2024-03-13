import Link from "next/link"
import { PrismaClient } from "@prisma/client";

import BookSlider from "./BookSlider";

type Props = {
  title: string,
  genres: string[]
  href: string
  booksPerView: number
}

const prisma = new PrismaClient()

export default async function DisplayRow({title, genres, href, booksPerView} : Props) {
  const books = title.includes("New") ? 
    await prisma.book.findMany({
      where: {
        yearPublished: {
          gte: 2010
        }
      }
    })
    .then(list => list.slice(0, 7)) : 
    await prisma.book.findMany({
      where: {
        genre: {
          hasSome: [...genres]
        }
      }
    })
    .then(list => list.slice(0, 7))
  
  return (
    <section className="p-8">
      <div className="flex justify-center items-baseline text-center xs:justify-between xs:text-left">
        <h1 className="text-2xl font-light sm:text-3xl xs:text-left">
          {title}
        </h1>
        <Link
          href={href} 
          className="transition-colors decoration-1 underline-offset-2 underline font-light text-lg hover:text-amber-600 hidden xs:block"
        >
          See All
        </Link>
      </div>
      <BookSlider books={books} booksPerView={booksPerView} />
      <Link
          href={href} 
          className="transition-colors decoration-1 underline-offset-2 underline font-light text-lg hover:text-amber-600 block text-center xs:hidden xs:text-left"
      >
        See All
      </Link>
    </section>
  )
}
