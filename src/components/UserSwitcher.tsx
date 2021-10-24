import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import kidsImage from '../public/kids.png'

interface UsertSwitcherProps {
  users: UserItemProps[]
}

const UserSwitcher: React.FC<UsertSwitcherProps> = ({ users }) => {
  return (
    <UserSwitcherContainer>
      {users.map((user) => {
        return user.url ? (
          <a key={user.name} href={user.url} title={`${user.name} profil választása`}>
            <UserItem {...user} />
          </a>
        ) : (
          <Link key={user.name} href="/home">
            <a title={`${user.name} profil választása`}>
              <UserItem {...user} />
            </a>
          </Link>
        )
      })}
    </UserSwitcherContainer>
  )
}

export interface UserItemProps {
  name: string
  image: string
  startColor?: string
  endColor?: string
  url?: string
}

const UserItem: React.FC<UserItemProps> = ({ name, image, ...colors }) => {
  return (
    <UserItemContainer {...colors}>
      <div className="emoji">
        {image !== 'kids' ? image : <Image src={kidsImage} alt={name} width={200} height={200} />}
      </div>
      <div className="name">{name}</div>
    </UserItemContainer>
  )
}

// STYLES

const UserSwitcherContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  display: flex;
  margin-top: 2vw;

  a {
    text-decoration: none;
  }
`

interface UserItemContainerProps {
  startColor?: string
  endColor?: string
}

const UserItemContainer = styled.div<UserItemContainerProps>`
  cursor: pointer;
  margin: 0 1vw;

  .emoji {
    height: 85px;
    width: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0px solid white;
    padding: 3px;
    background: linear-gradient(180deg, ${({ startColor }) => startColor} 0%, ${({ endColor }) => endColor} 100%);
    font-size: 50px;

    @media screen and (min-width: 1024px) {
      height: 10vw;
      width: 10vw;
      font-size: 7vw;
    }

    img {
      border-radius: 5px;
    }
  }

  .name {
    color: grey;
    text-align: center;
    margin: 0.6em 0;
    line-height: 1.2em;
    min-height: 1.8em;
    font-size: 12px;

    @media screen and (min-width: 1024px) {
      line-height: 1.2em;
      min-height: 1.8em;
      font-size: 1.3vw;
    }
  }

  &:hover {
    .emoji {
      border-width: 3px;
      padding: 0;
    }

    .name {
      color: white;
    }
  }
`

export default UserSwitcher
