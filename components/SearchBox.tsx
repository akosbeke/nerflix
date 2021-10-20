import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { FaSearch } from 'react-icons/fa'

import useLayoutEffect from '../hooks/useIsomorphicLayoutEffect'

const SearchBox: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)

  useLayoutEffect(() => {
    if (open && searchRef) searchRef.current?.focus()
  }, [open, searchRef])

  return (
    <SearchContainer className={open ? 'opened' : ''}>
      <MenuIcon onClick={() => setOpen(!open)} aria-label="Keresés">
        <FaSearch />
      </MenuIcon>

      <SearchInput
        ref={searchRef}
        aria-label="Címek, emberek, műfajok"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Címek, emberek, műfajok"
        className={open ? 'opened' : ''}
      />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  display: inline-flex;
  align-items: center;
  border: solid 1px transparent;

  &.opened {
    background: rgba(0, 0, 0, 0.75);
    border-color: rgba(255, 255, 255, 0.85);
  }
`

const MenuIcon = styled.span`
  font-size: 18px;
  cursor: pointer;
  padding: 0 6px;
  line-height: 1;
`

const SearchInput = styled.input`
  border: none;
  background: 0 0;
  color: white;

  padding: 7px 0 7px;
  font-size: 14px;
  outline: 0;
  width: 0;
  opacity: 0;
  transition: 300ms;

  &.opened {
    width: 212px;
    opacity: 1;
    padding-left: 14;
    padding-right: 7;
  }
`
export default SearchBox
