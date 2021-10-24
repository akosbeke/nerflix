import React from 'react'

import NavBar from '../NavBar'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const UserSwitcherLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <NavBar logoOnly />
      </header>
      <main>{children}</main>
    </>
  )
}

export default UserSwitcherLayout
