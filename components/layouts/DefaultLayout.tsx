import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'
import Typography from '../Typography'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>

      <FooterContainer>
        <Typography>
          Ez a honlap kizárólag oktatási céllal készült és semmilyen formában nincs kapcsolat a Netflix-szel vagy az
          Elk*rtuk című film gyártójával.
        </Typography>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.footer`
  padding: 20px 30px;
  text-align: center;

  .body {
    color: #7e7e7e;
  }
`

export default DefaultLayout
