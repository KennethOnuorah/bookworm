export const holidayBannerThemes: HolidayTheme[] = [
  {
    title: "👨🏿👩🏿 Celebrate Black History Month",
    subtitle: "Browse reader-approved African-American literature",
    backgroundColor: "green",
    textColors: ["black", "#650000"],
    href: "/genres/African-American",
    startDate: new Date(new Date().getFullYear(), 1, 1),
    endDate: new Date(new Date().getFullYear(), 1, 28),
  },
  {
    title: "💞 Celebrate Valentine's Day",
    subtitle: "Discover some books for your romantic day!",
    backgroundColor: "#FFC0CB",
    textColors: ["#d30000", "#a90000"],
    href: "/genres/romance",
    date: new Date(2024, 1, 14)
  },
  {
    title: "👩🏻‍🦰👩🏽‍🦱👩🏿 Celebrate Women's History Month",
    subtitle: "Browse reader-approved women's literature",
    backgroundColor: "purple",
    textColors: ["#d28af9", "#c77eef"],
    href: "/genres/womens",
    startDate: new Date(new Date().getFullYear(), 2, 1),
    endDate: new Date(new Date().getFullYear(), 2, 31),
  },
  {
    title: "🎭 April Fools!",
    subtitle: "Sit down and have a good laugh with these books",
    backgroundColor: "indigo",
    textColors: ["#f8e800", "#c4b700"],
    href: "/genres/comedy",
    date: new Date(new Date().getFullYear(), 3, 1),
  },
  {
    title: "🎃 Happy Halloween",
    subtitle: "Discover horror books to scare your socks off!",
    backgroundColor: "black",
    textColors: ["rgba(249, 115, 22, 1)", "rgba(253, 186, 116, 1)"],
    href: "/genres/horror",
    date: new Date(new Date().getFullYear(), 9, 31)
  },
  {
    title: "🎅🏻🦌 Merry Christmas!",
    subtitle: "Grab a book and get comfy this holiday season!",
    backgroundColor: "#318b0d",
    textColors: ["rgba(23, 212, 42, 1)", "rgba(133, 13, 0, 1)"],
    href: "#",
    startDate: new Date(new Date().getFullYear(), 11, 20),
    endDate: new Date(new Date().getFullYear(), 11, 25)
  },
]