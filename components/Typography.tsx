import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  variant?: 'body' | 'heading'
}

const Typography: React.FC<Props> = ({ children, component = 'div', variant = 'body' }) => {
  return (
    <Container as={component} className={variant}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  margin-bottom: 0.5em;

  &.body {
    font-weight: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 1.1vw;
  }

  &.heading {
    font-weight: 700;
    line-height: 1.25vw;
    font-size: 1.4vw;
  }
`

export default Typography
