import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { SITENAME, USERS } from '../config'
import UserSwitcherLayout from '../components/layouts/UserSwitcherLayout'
import Typography from '../components/Typography'
import UserSwitcher from '../components/UserSwitcher'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ki nézi? - {SITENAME}</title>
        <meta name="description" content="Ki nézi a NERflixet?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserSwitcherLayout>
        <UserSwitcherContainer>
          <Typography variant="huge" component="h1">
            Ki nézi?
          </Typography>

          <UserSwitcher users={USERS} />
        </UserSwitcherContainer>
      </UserSwitcherLayout>
    </>
  )
}

const UserSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default Home
