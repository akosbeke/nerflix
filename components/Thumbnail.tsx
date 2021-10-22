import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  src: ImageProps['src']
}

const Thumbnail: React.FC<Props> = ({ title, src }) => {
  return (
    <Link href="/watch" passHref>
      <ThumbnailContainer>
        <Image alt={title} src={src} width={341} height={191} />
      </ThumbnailContainer>
    </Link>
  )
}

const ThumbnailContainer = styled.a`
  display: block;
  text-decoration: none;
  margin: 0 2.5px;

  img {
    width: 100%;
    border-radius: 5px;
  }
`

export default Thumbnail
