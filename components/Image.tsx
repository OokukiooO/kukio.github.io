import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={src.startsWith('/') ? src : `/${src}`} {...rest} />
)

export default Image
