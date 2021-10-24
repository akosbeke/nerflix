import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { ProfilePicture } from './NavBar'

interface Props {
  opened?: boolean
  onClose?: () => void
}

const Drawer: React.FC<Props> = ({ opened = false, onClose }) => {
  if (!opened) return null

  return (
    <>
      <Container>
        <Link href="/">
          <a>
            <Profile>
              <ProfilePicture aria-label="Profil">🍊</ProfilePicture>
              <span>Váltás másik profilra</span>
            </Profile>
          </a>
        </Link>
        <Menu>
          <MenuItem className="active">
            <Link href="/home">
              <a>Főoldal</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/browse/Tévéműsorok">
              <a>Tévéműsorok</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/browse/Filmek">
              <a>Filmek</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/browse/Új és népszerű">
              <a>Új és népszerű</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/browse/Saját listám">
              <a>Saját listám</a>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
      <Overlay
        onClick={() => {
          if (onClose) {
            onClose()
          }
        }}
      />
    </>
  )
}

const Container = styled.aside`
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 250px;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  font-family: ${(props) => props.theme.fonts.body};
  color: white;

  a {
    text-decoration: none;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 250px;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #484848;

  span {
    margin-left: 10px;
    color: white;
  }
`

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  padding: 10px 20px;

  a {
    color: white;
    font-weight: 700;
  }
`

export default Drawer
