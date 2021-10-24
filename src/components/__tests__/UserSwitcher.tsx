import { screen } from '@testing-library/react'

import { render } from '../../test/providers'
import UserSwitcher from '../UserSwitcher'

test('UserSwitcher should render a list of users with the proper links', () => {
  const users = [
    { name: 'User1', image: '🍊', startColor: 'red', endColor: 'pink' },
    { name: 'User2', image: '🍎', startColor: 'blue', endColor: 'green' },
    { name: 'User3', image: 'kids', url: 'https://test.hu' },
  ]

  render(<UserSwitcher users={users} />)

  expect(screen.getByText(users[0].name)).toBeInTheDocument()
  expect(screen.getByText(users[0].image)).toBeInTheDocument()
  expect(screen.getByText(users[1].name)).toBeInTheDocument()
  expect(screen.getByText(users[1].image)).toBeInTheDocument()
  expect(screen.getByText(users[2].name)).toBeInTheDocument()
  expect(screen.getByAltText(users[2].name)).toBeInTheDocument()

  expect(screen.getByTitle(/user1 profil választása/i)).toHaveAttribute('href', '/home')
  expect(screen.getByTitle(/user3 profil választása/i)).toHaveAttribute('href', users[2].url)
})
