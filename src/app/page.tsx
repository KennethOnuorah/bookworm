import Events from "./components/Events"
import BookCarousel from "./components/BookCarousel"
import Advertisement from "./components/Advertisement"

export const revalidate = 2628336 //Revalidates data every month

export default function Home() {
  return (
    <main>
      <Events/>
      <div className="mt-8 px-8 text-center font-bold">
        Find The Book That's Right For You!
        <br/>
        <div className="text-sm font-normal">
          With over 6 million books ready to ship, 2.8 million eBooks, and 400,000 audiobooks available for download, you'll never miss out!
        </div>
        <hr className="mt-8"/>
      </div>
      <BookCarousel
        title="New Releases"
        URL={`${process.env.BASE_URL}volumes?q=""+subject:fiction&orderBy=newest&key=${process.env.GOOGLE_BOOKS_API_KEY}`}
        totalBooksDisplayed={5}
      />
      <BookCarousel
        title="Adventure Awaits!"
        URL={`${process.env.BASE_URL}volumes?q=""+subject:fiction&orderBy=newest&key=${process.env.GOOGLE_BOOKS_API_KEY}`}
        totalBooksDisplayed={5}
      />
      <Advertisement 
        src="/images/advertisements/advertisement1.png"
        href="https://www.amazon.com/Amazon-Kindle-Ereader-Family/b?ie=UTF8&node=6669702011"
      />
      <BookCarousel
        title="For The History Geeks"
        URL={`${process.env.BASE_URL}volumes?q=""+subject:fiction&orderBy=newest&key=${process.env.GOOGLE_BOOKS_API_KEY}`}
        totalBooksDisplayed={5}
      />
      <BookCarousel
        title="Love Is In The Air"
        URL={`${process.env.BASE_URL}volumes?q=""+subject:fiction&orderBy=newest&key=${process.env.GOOGLE_BOOKS_API_KEY}`}
        totalBooksDisplayed={5}
      />
    </main>
  )
}
