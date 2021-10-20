import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'

const MainHeader = styled.header``

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader>
        <NavBar />
      </MainHeader>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
