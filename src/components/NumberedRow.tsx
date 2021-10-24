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
    <>
      <Spacer />
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
    </>
  )
}

const Container = styled.div`
  position: relative;
  display: none;

  @media screen and (min-width: 1024px) {
    margin-top: -7vw;
    display: block;
  }
`

const Spacer = styled.div`
  height: 40px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export default NumberedRow
