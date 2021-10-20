import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaCaretUp } from 'react-icons/fa'

interface Props {
  children: React.ReactElement
  menuItem: React.ReactElement
  width: number
  forceClose?: boolean
  timeout?: number
}

interface DropdownContainerProps {
  width: number
}

let timer: ReturnType<typeof setTimeout> | undefined

const MenuDropdown: React.FC<Props> = ({ children, menuItem, width, forceClose = false, timeout = 1000 }) => {
  const [opened, setOpened] = useState<boolean>(false)

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (forceClose && timer) {
      if (timer) clearTimeout(timer)
      setOpened(false)
    }
  }, [forceClose])

  const handleMouseOver = () => {
    if (timer) clearTimeout(timer)

    setOpened(true)
  }
  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setOpened(false)
    }, timeout)
  }

  return (
    <Container onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <ItemContainer>{menuItem}</ItemContainer>
      <DropdownContainer className={opened ? 'opened' : ''} width={width}>
        <FaCaretUp className="caret-up" />
        {children}
      </DropdownContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const ItemContainer = styled.div`
  cursor: pointer;
`

const DropdownContainer = styled.div<DropdownContainerProps>`
  position: absolute;
  display: none;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: ${(props) => props.width}px;
  right: 0;
  top: 50px;

  &.opened {
    display: block;
  }

  .caret-up {
    position: absolute;
    right: 0;
    top: -17px;
    font-size: 20px;
  }
`

export default MenuDropdown
