export type ImgType = {
  src: string,
  alt: string,
  width?: number,
  height?: number
}


export type DProjectCardType = {
  img: ImgType,
  href: string,
  title: string,
  description: string,
  keynotes: string[]
}