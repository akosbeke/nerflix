import type { NextPage } from 'next'
import Head from 'next/head'

import { SITENAME, VIDEO_URL } from '../config'
import DefaultLayout from '../components/layouts/DefaultLayout'
import MainTrailer from '../components/MainTrailer'
import NumberedRow from '../components/NumberedRow'
import HomeRow from '../components/HomeRow'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kezdőlap - {SITENAME}</title>
        <meta name="description" content="A NER teljes katalógusa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <MainTrailer url={VIDEO_URL} autoplay={true} />

        <NumberedRow />

        <HomeRow title="Jelenleg a legnépszerűbb" />
        <HomeRow title="Népszerű a NERflixen" />
        <HomeRow title="Saját listám" />
        <HomeRow title="Bűnügyi nyomozós filmek" />
        <HomeRow title="Dokumentumfilmek" />
      </DefaultLayout>
    </>
  )
}

export default Home
