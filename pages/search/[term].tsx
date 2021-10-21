import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { SITENAME } from '../../config'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Thumbnail from '../../components/Thumbnail'

import thumbnailPhoto from '../../public/thumbnail.jpg'
import MainContainer from '../../components/MainContainer'

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
          <SearchResult>
            {new Array(30).fill('Elk*rtuk').map((title, index) => (
              <Thumbnail key={index} src={thumbnailPhoto} title={title} />
            ))}
          </SearchResult>
        </MainContainer>
      </DefaultLayout>
    </>
  )
}

const SearchResult = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 4vw;
`

const SearchText = styled.div`
  margin: 150px 0 1vw;
  font-family: ${(props) => props.theme.fonts.body};
  color: grey;

  span {
    color: white;
  }
`

export default Search
