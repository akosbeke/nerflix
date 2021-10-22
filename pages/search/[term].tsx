import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { SITENAME } from '../../config'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Thumbnail from '../../components/Thumbnail'

import thumbnailPhoto from '../../public/thumbnail.jpg'
import MainContainer from '../../components/MainContainer'
import { ThumbnailGrid } from '../../styles/global'

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>Keresés - {SITENAME}</title>
        <meta name="description" content="Keresés" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <MainContainer>
          <SearchText>
            Fedezz fel ehhez hasonló műsorokat: <span>Elk*rtuk</span>
          </SearchText>
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

const SearchText = styled.div`
  margin: 60px 0 20px;
  font-family: ${(props) => props.theme.fonts.body};
  color: grey;

  @media screen and (min-width: 1024px) {
    margin: 150px 0 1vw;
  }

  span {
    color: white;
  }
`

export default Search
