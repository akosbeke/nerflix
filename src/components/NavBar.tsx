import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { FaBell } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

import nerlogo from '../public/nerflix_logo.png'
import SearchBox from './SearchBox'
import MenuDropdown, { MenuDropdownItem } from './MenuDropdown'
import { NOTIFICATIONS, SITENAME } from '../config'
import Drawer from './Drawer'

interface Props {
  logoOnly?: boolean
}

const NavBar: React.FC<Props> = ({ logoOnly }) => {
  const [activeDropdown, setActiveDropdown] = useState<'notification' | 'profile' | null>(null)
  const [drawer, setDrawer] = useState<boolean>(false)

  return (
    <FixedNav>
      <NavContainer>
        <Hamburger onClick={() => setDrawer(!drawer)}>
          <FaBars />
        </Hamburger>
        <Logo>
          <Link href="/">
            <a>
              <Image alt={SITENAME} src={nerlogo} width={90} height={33} />
            </a>
          </Link>
        </Logo>

        {!logoOnly && (
          <>
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

            <RightMenuItem className="mobile">
              <SearchBox />
            </RightMenuItem>

            <RightMenuItem onMouseOver={() => setActiveDropdown('notification')}>
              <MenuDropdown
                menuItem={
                  <div aria-label="Értesítések">
                    <MenuIcon>
                      <FaBell />
                    </MenuIcon>
                  </div>
                }
                width={300}
                forceClose={activeDropdown !== 'notification'}
              >
                <div data-testid="notification-dropdown">
                  {NOTIFICATIONS.map((notification) => (
                    <MenuDropdownItem key={notification.id} border>
                      {notification.text}
                    </MenuDropdownItem>
                  ))}
                </div>
              </MenuDropdown>
            </RightMenuItem>

            <RightMenuItem onMouseOver={() => setActiveDropdown('profile')}>
              <MenuDropdown
                menuItem={<ProfilePicture aria-label="Profil">🍊</ProfilePicture>}
                width={180}
                forceClose={activeDropdown !== 'profile'}
              >
                <div data-testid="profile-dropdown">
                  <Link href="/" passHref>
                    <a>
                      <MenuDropdownItem>Kijelentkezés</MenuDropdownItem>
                    </a>
                  </Link>
                </div>
              </MenuDropdown>
            </RightMenuItem>
          </>
        )}
      </NavContainer>
      <Drawer
        opened={drawer}
        onClose={() => {
          setDrawer(false)
        }}
      />
    </FixedNav>
  )
}

const Hamburger = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 20px;
  margin-right: 10px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const FixedNav = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
`

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 4%;
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  background: rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 1024px) {
    height: 68px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
  }
`

const Logo = styled.div`
  flex-grow: 1;

  @media screen and (min-width: 1024px) {
    flex-grow: 0;
  }
`

const Menu = styled.ul`
  list-style: none;
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex: 1;
  }
`

const MenuItem = styled.li`
  margin-left: 18px;

  a {
    color: white;
    font-size: 14px;
    text-decoration: none;
  }

  &.active a {
    font-weight: 500;
  }
`

const RightMenuItem = styled.div`
  margin-left: 30px;

  &:not(.mobile) {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
`

const MenuIcon = styled.span`
  font-size: 20px;
`

export const ProfilePicture = styled.div`
  width: 32px;
  height: 32px;
  background: rgb(204, 113, 0);
  background: linear-gradient(180deg, rgba(204, 113, 0, 1) 0%, rgba(255, 141, 0, 1) 100%);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default NavBar
