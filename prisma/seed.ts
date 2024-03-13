import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

type RawJSONObject = {
  title: string
  author: string
  description: string
  pages: number
  coverURL: string
  yearPublished: number
  genre: string
}

interface ProcessedJSONObject extends Omit<RawJSONObject, 'author' | 'genre'> {
  author: string[]
  genr: string[]
}

async function fetchBookData(): Promise<RawJSONObject[]> {
  const res = await fetch("https://raw.githubusercontent.com/KennethOnuorah/bookworm-sample-data/main/data/data.json", {
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Authorization': `Bearer ${process.env.GITHUB_AUTHORIZATION_TOKEN}`
    }
  })
  const text = await res.text()
  const records: RawJSONObject[] = JSON.parse(text)
  return records
}

async function startSeed() {
  const records = await fetchBookData()
  const processedRecords: ProcessedJSONObject[] = records.map(record => ({
    title: record.title.toString(),
    author: record.author.split(','),
    description: record.description,
    pages: record.pages,
    coverURL: record.coverURL,
    yearPublished: record.yearPublished,
    genr: record.genre.split(','),
  }))
  await prisma.book.createMany({ data: processedRecords })
}

startSeed()
  .then(() => console.log(`🌱 The database has been seeded. [${new Date().toLocaleTimeString()}]`))
  .catch((error) => console.error(`❌ Seeding failed. ${error}`))
  .finally(() => prisma.$disconnect())