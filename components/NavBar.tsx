import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { FaBell } from 'react-icons/fa'

import nerlogo from '../public/nerflix_logo.png'
import SearchBox from './SearchBox'
import MenuDropdown from './MenuDropdown'
import { SITENAME } from '../config'

interface Props {
  logoOnly?: boolean
}

const NavBar: React.FC<Props> = ({ logoOnly }) => {
  const [activeDropdown, setActiveDropdown] = useState<'notification' | 'profile' | null>(null)

  return (
    <FixedNav>
      <NavContainer>
        <Image alt={SITENAME} src={nerlogo} width={90} height={33} />

        {!logoOnly && (
          <>
            <Menu>
              <MenuItem className="active">
                <a href="#">Főoldal</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Tévéműsorok</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Filmek</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Új és népszerű</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Saját listám</a>
              </MenuItem>
            </Menu>

            <RightMenuItem>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis repellat quis sint ea soluta
                  rerum. Atque, itaque. Soluta deleniti, facere dolores nulla explicabo enim officiis minus eaque ipsum
                  quibusdam.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatum similique facilis odio ex
                  harum placeat dolor aliquam debitis ea dolore aliquid, at cupiditate animi provident nulla. Magni,
                  neque rerum!
                </div>
              </MenuDropdown>
            </RightMenuItem>
          </>
        )}
      </NavContainer>
    </FixedNav>
  )
}

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
  height: 68px;
  padding: 0 4%;
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
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
`

const MenuIcon = styled.span`
  font-size: 20px;
`

const ProfilePicture = styled.div`
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
