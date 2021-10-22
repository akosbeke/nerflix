import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { SITENAME } from '../../config'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Thumbnail from '../../components/Thumbnail'

import thumbnailPhoto from '../../public/thumbnail.jpg'
import MainContainer from '../../components/MainContainer'
import { ThumbnailGrid } from '../../styles/global'

const Browse: NextPage = () => {
  const router = useRouter()
  const { title } = router.query

  return (
    <>
      <Head>
        <title>Böngészés - {SITENAME}</title>
        <meta name="description" content="Keresés" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <MainContainer>
          <BrowseTitle>{title}</BrowseTitle>
        </MainContainer>
        <MainContainer>
          <ThumbnailGrid>
            {new Array(30).fill('Elk*rtuk').map((title, index) => (
              <Thumbnail key={index} src={thumbnailPhoto} title={title} />
            ))}
          </ThumbnailGrid>
        </MainContainer>
      </DefaultLayout>
    </>
  )
}

const BrowseTitle = styled.h1`
  margin: 60px 0 20px;
  font-family: ${(props) => props.theme.fonts.body};
  color: white;
  font-weight: 700;
  font-size: 30px;

  @media screen and (min-width: 1024px) {
    margin: 150px 0 1vw;
    font-size: 38px;
  }
`

export default Browse
