type Banner = {
  lg: string
  sm: string
  alt: string
}

type VolumeInfo = {
  title: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: { type: string, identifier: string }[]
  pageCount: number
  dimensions: { width: string, height: string, thickness: string }[]
  printType: string
  mainCategory: string
  categories: string[]
  averageRating: number
  ratingsCount: number
  contentVersion: string
  imageLinks: {
    smallThumbnail: string,
    thumbnail: string,
    small: string,
    medium: string,
    large: string,
    extraLarge: string
  },
  language: string,
  infoLink: string,
  canonicalVolumeLink: string
}

type SaleInfo = {
  country: string,
  saleability: string,
  isEbook: boolean,
  listPrice: {
    amount: string,
    currencyCode: string
  },
  retailPrice: {
    amount: number,
    currencyCode: string
  },
  buyLink: string
}

type AccessInfo = {
  country: string,
  viewability: string,
  embeddable: boolean,
  publicDomain: boolean,
  textToSpeechPermission: string,
  epub: {
    isAvailable: boolean,
    acsTokenLink: string
  },
  pdf: {
    isAvailable: boolean
  },
  accessViewStatus: string
}

type BookData = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
}

type GoogleBooksAPIResponse = {
  kind: string
  totalItems: number
  items: BookData[]
}