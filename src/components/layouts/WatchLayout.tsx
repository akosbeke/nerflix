import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode | React.ReactNode[]
}

const WatchLayout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  background: black;
  min-width: 100vw;
  min-height: 100vh;
`

export default WatchLayout
