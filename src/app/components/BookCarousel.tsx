import Link from "next/link"
import Image from "next/image"

type Props = {
  title: string,
  URL: string,
  totalBooksDisplayed: number
}

export default async function BookCarousel({title, URL, totalBooksDisplayed} : Props) {
  const res = await fetch(URL)
  const data: GoogleBooksAPIResponse = await res.json()
  console.log(`Status: ${res.status} | Data (${new Date().toLocaleTimeString()}):\n`, data)

  return (
    <section className="p-8">
      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl font-light italic">
          {title}
        </h1>
        <Link
          href={`/${title}`} 
          className="transition-colors decoration-1 underline-offset-2 underline font-light text-lg hover:text-amber-600"
        >
          See All
        </Link>
      </div>
      <div className="mt-8 flex flex-wrap justify-evenly gap-16 items-center">
        {data.items.filter((item, index) => index < totalBooksDisplayed).map((item, index) => (
          <Link key={index} href={`/${item.volumeInfo.title}`}>
            <Image
              src={`${item.volumeInfo.imageLinks.thumbnail}&fife=w400-h600`}
              alt={`Image of front book cover of ${item.volumeInfo.title} by ${item.volumeInfo.authors.join(', ')}`}
              width={205} height={315}
              className="transition-all rounded-l-xl hover:drop-shadow-2xl shadow-black hover:-translate-y-2"
              priority
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
