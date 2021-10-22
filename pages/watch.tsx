import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import BackButton from '../components/BackButton'
import WatchLayout from '../components/layouts/WatchLayout'
import { SITENAME, VIDEO_URL } from '../config'

const Watch: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elk*rtuk - Lejátszás - {SITENAME}</title>
        <meta name="description" content="A NER teljes katalógusa" />
      </Head>
      <WatchLayout>
        <BackButton />

        <Container>
          <EmbedVideoContainer>
            <ReactPlayer
              className="react-player"
              url={VIDEO_URL}
              playing={true}
              loop={true}
              controls={true}
              width="100%"
              height="100%"
            />
          </EmbedVideoContainer>
        </Container>
      </WatchLayout>
    </>
  )
}

const Container = styled.div`
  flex: 1;
`

const EmbedVideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default Watch
