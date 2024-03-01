import Events from "./components/Events"
import BookCarousel from "./components/BookCarousel"
import Advertisement from "./components/Advertisement"

export const revalidate = 2628336

export default function HomePage() {
  return (
    <main>
      <Events/>
      <div className="mt-8 px-8 text-center font-bold">
        Find The Book That&apos;s Right For You!
        <br/>
        <div className="text-sm font-normal italic">
          With over 6 million books ready to ship, 2.8 million eBooks, and 400,000 audiobooks available for download, you&apos;ll never miss out!
        </div>
        <hr className="mt-8"/>
      </div>
      <BookCarousel
        title="New Releases"
        query=""
        href="/new"
        booksPerView={5}
      />
      <BookCarousel
        title="Spook-tacular!"
        query=""
        href="/genres/horror"
        booksPerView={5}
      />
      <Advertisement 
        src="/images/advertisements/advertisement1.png"
        href="https://www.amazon.com/Amazon-Kindle-Ereader-Family/b?ie=UTF8&node=6669702011"
      />
      <BookCarousel
        title="For The History Geeks"
        query=""
        href="/genres/romance"
        booksPerView={5}
      />
      <BookCarousel
        title="Love Is In The Air"
        query=""
        href="/genres/romance"
        booksPerView={5}
      />
    </main>
  )
}
