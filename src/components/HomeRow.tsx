import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { FaChevronRight as RightIcon, FaChevronLeft as LeftIcon } from 'react-icons/fa'

import MainContainer from './MainContainer'
import Thumbnail from './Thumbnail'
import Typography from './Typography'

import thumbnailPhoto from '../public/thumbnail.jpg'

interface Props {
  title: string
}

const HomeRow: React.FC<Props> = ({ title }) => {
  return (
    <MainContainer>
      <RowContainer>
        <Typography variant="heading">{title}</Typography>

        <SliderWrapper>
          <Slider
            infinite={false}
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
            ]}
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
            {new Array(12).fill('Elk*rtuk').map((title, index) => {
              return (
                <div key={title + index}>
                  <Thumbnail src={thumbnailPhoto} title={title} />
                </div>
              )
            })}
          </Slider>
        </SliderWrapper>
      </RowContainer>
    </MainContainer>
  )
}

const RowContainer = styled.div`
  margin: 30px -2.5px;

  @media screen and (min-width: 1024px) {
    margin: 3vw -2.5px;
  }
`

const SliderWrapper = styled.div`
  margin-left: -2.5px;
  margin-right: -2.5px;
  position: relative;
`

export const ArrowWrapper = styled.div`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: flex !important;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: auto;
  z-index: 99;

  &.slick-next {
    left: auto;
    right: 0;
  }

  &.slick-disabled {
    display: none !important;
  }
`

export default HomeRow
