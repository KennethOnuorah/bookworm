import Events from "./components/Events"
import DisplayRow from "./components/DisplayRow"
import Advertisement from "./components/Advertisement"
import MoreInfo from "./components/MoreInfo"

export default function HomePage() {
  return (
    <main>
      <Events/>
      <div className="mt-6 px-8 text-xl text-center font-bold sm:mt-8">
        Find The Book That&apos;s Right For You!
        <br/>
        <div className="text-base font-normal">
          With over 6 million books ready to ship, 2.8 million eBooks, and 400,000 audiobooks available for download, you&apos;ll never miss out!
        </div>
        <hr className="mt-8"/>
      </div>
      <DisplayRow title="New Releases" genres={["Fiction"]} href="/new" booksPerView={5} />
      <DisplayRow 
        title="Spook-tacular!" 
        genres={["Horror", "Gothic"]} 
        href="/genres/horror" 
        booksPerView={5} 
      />
      <Advertisement 
        imageSrc="/images/advertisements/ad1.png"
        imageSrcMobile="/images/advertisements/ad1_mobile.png"
        href="https://www.amazon.com/Amazon-Kindle-Ereader-Family/b?ie=UTF8&node=6669702011"
        target="_blank"
      />
      <hr className="mx-8"/>
      <DisplayRow
        title="A Magical World Awaits!"
        genres={["Fantasy", "Magical Realism"]}
        href="/genres/fantasy"
        booksPerView={5}
      />
      <DisplayRow
        title="For The History Nerds"
        genres={["History", "Historical Fiction"]}
        href="/genres/history"
        booksPerView={5}
      />
      <Advertisement 
        imageSrc="/images/advertisements/ad2.png" 
        imageSrcMobile="/images/advertisements/ad2_mobile.png" 
        href="#" 
        target="_self"
      />
      <hr className="mx-8"/>
      <DisplayRow 
        title="Love Is In The Air" 
        genres={["Romance"]} 
        href="/genres/romance" 
        booksPerView={5}
      />
      <DisplayRow 
        title="Oldies, But Goldies" 
        genres={["Classics"]} 
        href="/genres/classics" 
        booksPerView={5}
      />
      <Advertisement 
        imageSrc="/images/advertisements/ad3.png" 
        imageSrcMobile="/images/advertisements/ad3_mobile.png" 
        href="#" 
        target="_self" 
      />
      <hr className="mx-8"/>
      <MoreInfo/>
    </main>
  )
}
