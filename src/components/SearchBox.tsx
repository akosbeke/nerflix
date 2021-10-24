import React, { FormEvent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { FaSearch } from 'react-icons/fa'

import * as ga from '../lib/ga'
import useLayoutEffect from '../hooks/useIsomorphicLayoutEffect'

const SearchBox: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  useEffect(() => {
    if (router?.query?.term) {
      setSearchText(router.query.term as string)
      setOpen(true)
    }
  }, [router])

  useLayoutEffect(() => {
    if (open && searchRef) searchRef.current?.focus()
  }, [open, searchRef])

  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    if (searchText !== '') {
      ga.event({
        action: 'search',
        params: {
          search_term: searchText,
        },
      })

      router.push(`/search/${searchText}`)
    }
  }

  return (
    <SearchContainer className={open ? 'opened' : ''}>
      <MenuIcon onClick={() => setOpen(!open)} aria-label="Keresés">
        <FaSearch />
      </MenuIcon>

      <form onSubmit={handleSubmit}>
        <SearchInput
          ref={searchRef}
          aria-label="Címek, emberek, műfajok"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Címek, emberek, műfajok"
          className={open ? 'opened' : ''}
        />
      </form>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  display: inline-flex;
  align-items: center;
  border: solid 1px rgba(255, 255, 255, 0.85);
  background: rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 1024px) {
    background: transparent;
    border-color: transparent;
  }

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
  display: none;

  @media screen and (min-width: 1024px) {
    display: inline;
  }
`

const SearchInput = styled.input`
  border: none;
  background: 0 0;
  color: white;

  padding: 7px;
  font-size: 14px;
  outline: 0;
  width: 120px;

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
    width: 0;
    opacity: 0;
    transition: 300ms;
  }

  &.opened {
    @media screen and (min-width: 1024px) {
      width: 212px;
      opacity: 1;
      padding-left: 14;
      padding-right: 7;
    }
  }
`
export default SearchBox
