import React from 'react'
import styled from 'styled-components'
import { FaChevronRight as RightIcon, FaChevronLeft as LeftIcon } from 'react-icons/fa'

import MainContainer from './MainContainer'
import ThumbnailNumber from './ThumbnailNumber'
import Typography from './Typography'

import portraitThumbnail from '../public/thumbnail_portrait.jpg'
import Slider from 'react-slick'
import { ArrowWrapper } from './HomeRow'

const NumberedRow = () => {
  return (
    <Container>
      <MainContainer>
        <Typography variant="heading">Top 10 ma | Magyarország</Typography>

        <Slider
          infinite={false}
          speed={500}
          slidesToShow={6}
          slidesToScroll={4}
          nextArrow={
            <ArrowWrapper>
              <RightIcon />
            </ArrowWrapper>
          }
          prevArrow={
            <ArrowWrapper className="right">
              <LeftIcon />
            </ArrowWrapper>
          }
        >
          {new Array(10).fill('Elk*rtuk').map((title, index) => {
            return <ThumbnailNumber key={title + index} number={index + 1} src={portraitThumbnail} title={title} />
          })}
        </Slider>
      </MainContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  margin-top: -7vw;
`

export default NumberedRow
