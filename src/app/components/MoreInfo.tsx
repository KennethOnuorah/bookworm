import Image from "next/image"

export default function MoreInfo() {
  return (
    <section className="px-8 my-8 lg2:px-24">
      <h1 className="font-semibold text-xl text-center">
        Buy Books Online at Bookworm.com, America&apos;s #1 Bookstore.
      </h1>
      <p className="text-center mt-4">
        No matter what you&apos;re a fan of, from Fiction to Biography, Sci-Fi,
        Mystery, YA, and more, Bookworm has the perfect book that speaks to you.
        Shop the bestselling books you love anytime, anywhere.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a 
          href={'https://www.apple.com/app-store/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/app_store.png"
            alt="Apple store"
            width={0} height={0}
            sizes="100vw"
            className="w-auto h-8"
          />
        </a>
        <a
          href={'https://play.google.com/'}
          target="_blank"
        >
          <Image
            src="/images/google_play.png"
            alt="Google Play"
            width={0} height={0}
            sizes="100vw"
            className="w-auto h-8"
          />
        </a>
      </div>
    </section>
  )
}
