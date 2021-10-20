import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

interface Props {
  url: string
  autoplay?: boolean
  loop?: boolean
}

const MainTrailer: React.FC<Props> = ({ url, autoplay = true, loop = true }) => {
  return (
    <Container>
      <EmbedVideoContainer>
        <ReactPlayer
          className="react-player"
          url={url}
          playing={autoplay}
          loop={loop}
          controls={false}
          width="100%"
          height="100%"
        />
      </EmbedVideoContainer>
      <BottomGradient />
    </Container>
  )
}

const EmbedVideoContainer = styled.div`
  top: -50%;
  transform: translateY(25%);
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Container = styled.div`
  width: 100%;
  height: 42.1vw;
  position: relative;
  overflow: hidden;
  background-color: black;
`

const BottomGradient = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.background};
  background: linear-gradient(180deg, transparent 0%, ${(props) => props.theme.colors.background} 100%);
  height: 150px;
`

export default MainTrailer
