import React from 'react'
import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

interface Props {
  number: number
  title: string
  src: ImageProps['src']
}

const ThumbnailNumber: React.FC<Props> = ({ number, src, title }) => {
  return (
    <Container>
      <Number>{number}</Number>
      <ImageWrapper>
        <Image src={src} alt={title} width={426} height={597} />
      </ImageWrapper>
    </Container>
  )
}

const Number = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 13vw;
  font-weight: 900;
  line-height: 12vw;

  color: rgb(89, 89, 89);
  -webkit-text-fill-color: black;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: rgb(89, 89, 89);
`

const Container = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  overflow: hidden;
  padding: 35.714285714% 0;
`

const ImageWrapper = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
`

export default ThumbnailNumber
