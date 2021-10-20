import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return <MainContainerDiv>{children}</MainContainerDiv>
}

const MainContainerDiv = styled.div`
  padding: 0 4%;
`

export default MainContainer
