import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SITENAME } from '../../config'
import { render } from '../../test/providers'
import NavBar from '../NavBar'

test('NavBar should render all the necessary components', async () => {
  render(<NavBar />)

  expect(screen.getByAltText(SITENAME)).toBeInTheDocument()

  expect(screen.getByRole('navigation')).toBeInTheDocument()
  expect(screen.getByText(/főoldal/i)).toBeInTheDocument()
  expect(screen.getByText(/tévéműsorok/i)).toBeInTheDocument()
  expect(screen.getByText(/filmek/i)).toBeInTheDocument()
  expect(screen.getByText(/új és népszerű/i)).toBeInTheDocument()
  expect(screen.getByText(/saját listám/i)).toBeInTheDocument()

  expect(screen.getByLabelText(/keresés/i)).toBeInTheDocument()

  const notificationDropdown = screen.getByTestId('notification-dropdown')
  const profileDropdown = screen.getByTestId('profile-dropdown')

  expect(notificationDropdown).toBeInTheDocument()
  expect(profileDropdown).toBeInTheDocument()
})

test('NavBar should only render logo in logoOnly mode', async () => {
  render(<NavBar logoOnly />)

  expect(screen.getByAltText(SITENAME)).toBeInTheDocument()
  expect(screen.queryByLabelText(/keresés/i)).not.toBeInTheDocument()
})
