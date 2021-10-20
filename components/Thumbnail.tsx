import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

interface Props {
  title: string
  src: ImageProps['src']
}

const Thumbnail: React.FC<Props> = ({ title, src }) => {
  return (
    <ThumbnailContainer>
      <Image alt={title} src={src} width={341} height={191} />
    </ThumbnailContainer>
  )
}

const ThumbnailContainer = styled.div`
  margin: 0 2.5px;

  img {
    width: 100%;
    border-radius: 5px;
  }
`

export default Thumbnail
