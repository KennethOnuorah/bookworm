'use client'

import { useState } from "react";
import Link from "next/link"

import { Menu } from "@mui/material";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  title: string,
  query: string
  href: string
  booksPerView: number
}

export default async function BookCarousel({title, query, href, booksPerView} : Props) {
  const [observedElement, setObservedElement] = useState<HTMLAnchorElement | undefined>(undefined)

  const sliderSettings: Settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: booksPerView,
    slidesToScroll: 1
  }

  return (
    <section className="p-8">
      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl font-light italic">
          {title}
        </h1>
        <Link
          href={href} 
          className="transition-colors decoration-1 underline-offset-2 underline font-light text-lg hover:text-amber-600"
        >
          See All
        </Link>
      </div>
      <Slider {...sliderSettings} className="mt-8">
        {/* {data.items.map((item, index) => (
          <Link
            key={index}
            href={`/${item.volumeInfo.title}`}
            onMouseEnter={(e) => {
              setObservedElement(e.currentTarget)
              console.log("Menu is appearing")
            }}
            onMouseLeave={() => setObservedElement(undefined)}
          >
            <Image
              src={`${item.volumeInfo.imageLinks.thumbnail}&fife=w400-h600`}
              alt={`Image of front book cover of ${item.volumeInfo.title} by ${item.volumeInfo.authors.join(', ')}`}
              width={0} height={0}
              sizes="100vw"
              className="rounded-l-xl w-auto h-auto"
              priority
            />
          </Link>
        ))} */}
      </Slider>
      <Menu
        open={Boolean(observedElement)}
        anchorEl={observedElement && observedElement}
      >
        This is a menu
      </Menu>
    </section>
  )
}
