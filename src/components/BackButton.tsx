import React from 'react'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'

const BackButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <ButtonContainer onClick={handleClick} title="Vissza">
      <FaArrowLeft aria-labelledby="backButtonName" />
      <span id="backButtonName">Vissza a böngészéshez</span>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.a`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 30px;
  color: white;
  transition: 100ms;
  transform: scale(1);
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;

  span {
    opacity: 0;
    transition: 100ms;
  }

  &:hover {
    transform: scale(1.01);

    span {
      opacity: 1;
      margin-left: 10px;
    }
  }
`

export default BackButton
