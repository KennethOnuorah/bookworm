"use client"

import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

import useViewportDimensions from '@/lib/useViewportDimensions'

export default function Events() {
  const {width,} = useViewportDimensions()

  const slideshow: Banner[] = [
    {
      lg: "/images/banners/spring_book_sale_banner.svg",
      sm: "/images/banners/spring_book_sale_banner_mobile.svg",
      alt: "Banner advertising Spring book sale",
    },
    {
      lg: "/images/banners/the_castle_by_kafka.svg",
      sm: "/images/banners/the_castle_by_kafka_mobile.svg",
      alt: "Banner for promoting The Castle by Franz Kafka",
    },
    {
      lg: "/images/banners/the_raven_by_eap.svg",
      sm: "/images/banners/the_raven_by_eap_mobile.svg",
      alt: "Banner for promoting The Raven by Edgar Allen Poe",
    },
  ]

  return (
    <Carousel
      interval={6000}
      duration={1000}
      indicators={false}
      swipe={false}
    >
      {slideshow.map((slide, index) => (
        <Image 
          key={index} 
          src={width > 500 ? slide.lg : slide.sm} 
          alt={slide.alt} 
          width={0} height={0}
          sizes="100vw"
          className="w-screen h-auto cursor-pointer"
          priority
        />
      ))}
    </Carousel>
  )
}
