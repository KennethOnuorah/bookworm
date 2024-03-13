import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import { Metadata } from "next"

type Props = {
  params: {
    book: string
  }
}

export function generateMetadata({ params: { book }} : Props): Metadata {
  return {
    title: decodeURIComponent(book),
    description: `Page for book: ${decodeURIComponent(book)}`
  }
}

export default async function BookPage({ params: { book }} : Props) {
  const selectedBook = await prisma.book.findFirst({
    where: {
      title: {
        equals: decodeURIComponent(book)
      }
    }
  }) 
  return (
    <div>
      Book: {selectedBook?.title} by {selectedBook?.author.join(', ')}
    </div>
  )
}
