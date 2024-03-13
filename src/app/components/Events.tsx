"use client"

import { useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

import useMobileDetection from '@/lib/useMobileDetection'

export default function Events() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const width = useMobileDetection()

  const slideshow: Banner[] = [
    {
      desktop: "/images/banners/spring_book_sale_banner.svg",
      mobile: "/images/banners/spring_book_sale_banner_mobile.svg",
      alt: "Banner advertising Spring book sale",
    },
    {
      desktop: "/images/banners/the_castle_by_kafka.svg",
      mobile: "/images/banners/the_castle_by_kafka_mobile.svg",
      alt: "Banner advertising The Castle by Franz Kafka",
    },
    {
      desktop: "/images/banners/the_raven_by_eap.svg",
      mobile: "/images/banners/the_raven_by_eap_mobile.svg",
      alt: "Banner advertising The Raven by Edgar Allen Poe",
    },
    {
      desktop: "/images/banners/doawk.svg",
      mobile: "/images/banners/doawk_mobile.svg",
      alt: "Banner advertising Diary of a Wimpy Kid by Jeff Kinney",
    },
  ]

  return (
    <>
      <Image
        src={slideshow[0].desktop}
        width={0} height={0}
        alt="banner_trigger"
        onLoad={() => setImageLoaded(true)}
        priority
      />
      {imageLoaded &&
        <Carousel
          autoPlay
          interval={6000}
          duration={1000}
          indicators={true}
          swipe={false}
        >
          {slideshow.map((slide, index) => (
            <Image 
              key={index} 
              src={width >= 500 ? slide.desktop : slide.mobile} 
              alt={slide.alt} 
              width={0} height={0}
              sizes="100vw"
              className="w-screen h-auto cursor-pointer"
              priority
            />
          ))}
        </Carousel>
      }
    </>
  )
}
