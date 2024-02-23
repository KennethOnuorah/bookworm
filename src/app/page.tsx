import Events from "./components/Events"
import NewReleases from "./components/NewReleases"

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
      <NewReleases/>
    </main>
  )
}
