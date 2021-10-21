import React from 'react'

import NavBar from '../NavBar'

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
    </>
  )
}

export default DefaultLayout
