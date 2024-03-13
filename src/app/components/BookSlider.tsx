'use client'

import { useState } from "react";
import BookSlide from "./BookSlide";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronRight as Next, FaChevronLeft as Prev } from 'react-icons/fa'

type Props = {
  books: {
    id: number;
    title: string;
    author: string[];
    description: string;
    pages: number;
    coverURL: string;
    yearPublished: number;
    genre: string[];
  }[]
  booksPerView: number
}

export default function BookSlider({ booksPerView, books } : Props) {
  const [totalScrolls, setTotalScrolls] = useState(4)
  
  const sliderSettings: Settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Next color="black"/>,
    prevArrow: <Prev color="black"/>,
    afterChange: () => setTotalScrolls(totalScrolls + 1),
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 2,
          nextArrow: <></>,
          prevArrow: <></>,
          swipe: true,
        }
      },
      {
        breakpoint: 411,
        settings: {
          slidesToShow: 1,
          nextArrow: <></>,
          prevArrow: <></>,
          swipe: true,
        }
      },
    ]
  }

  return (
    <>
      <Slider {...sliderSettings} className="mt-8 overflow-visible">
        {books.map((book, index) => 
          <BookSlide 
            key={index} 
            title={book.title}
            author={book.author}
            description={book.description}
            coverURL={book.coverURL}
            totalScrolls={totalScrolls}
          />
        )}
      </Slider>
    </>
  )
}
