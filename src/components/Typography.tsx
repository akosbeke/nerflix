import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  variant?: 'body' | 'heading' | 'huge'
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
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 1.1vw;
    }
  }

  &.heading {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2em;

    @media screen and (min-width: 1024px) {
      line-height: 1.25vw;
      font-size: 1.4vw;
    }
  }

  &.huge {
    font-weight: 500;
    line-height: 1;
    font-size: 30px;

    @media screen and (min-width: 1024px) {
      font-size: 3.5vw;
    }
  }
`

export default Typography
