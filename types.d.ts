type Banner = {
  desktop: string
  mobile: string
  alt: string
}

type Book = {
  title: string
  author: string[]
  description: string
  pages: number
  coverURL: string
  yearPublished: number
  genre: string[]
}

type HolidayTheme = {
  title: string
  subtitle: string
  backgroundColor: string
  textColors: [string, string]
  href: string
  date?: Date
  startDate?: never,
  endDate?: never
} | {
  title: string
  subtitle: string
  backgroundColor: string
  textColors: [string, string]
  href: string
  date?: never
  startDate: Date,
  endDate: Date
}