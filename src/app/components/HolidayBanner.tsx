'use client'

import Link from "next/link"
import { Dispatch, LegacyRef, SetStateAction, useEffect } from "react"
import { useMeasure } from "react-use"

import { holidayBannerThemes } from "@/helpers/holidayThemes"

type Props = {
  action: Dispatch<SetStateAction<number>>
}

export default function HolidayBanner({ action } : Props) {
  const [bannerRef, { height,}] = useMeasure()
  
  const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
  const isHolidayOnlyToday = holidayBannerThemes.some(holiday => holiday.date?.getTime() === today.getTime())
  const currentTheme = (isHolidayOnlyToday ? 
    holidayBannerThemes.find(holiday => holiday.date?.getTime() === today.getTime()) : 
    holidayBannerThemes.find(holiday => (holiday.startDate?.getTime()! < today.getTime() && today.getTime() < holiday.endDate?.getTime()!)))

  useEffect(() => {
    action(height + (currentTheme ? 8 /* <== 8px is the holiday banner's padding top & bottom */ : 0))
  }, [height, today])

  const holidayBanner = (
    <section 
      ref={bannerRef as LegacyRef<HTMLElement>} 
      className="sticky top-0 z-20 py-1"
      style={{backgroundColor: currentTheme?.backgroundColor}}
    >
      <Link 
        className="flex flex-col gap-0 justify-center items-center lg:flex-row lg:items-baseline lg:gap-4"
        href={currentTheme?.href ? currentTheme.href : "#"}
      >
        <span 
          className="font-semibold text-xs sm:text-lg"
          style={{color: currentTheme?.textColors[0]}}
        >
          {currentTheme?.title}
        </span>
        <span 
          className="text-sm hidden lg:block"
          style={{color: currentTheme?.textColors[1]}}
        >
          {currentTheme?.subtitle}
        </span>
      </Link>
    </section>
  )

  return currentTheme && holidayBanner
}
