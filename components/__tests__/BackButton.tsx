import { screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../../test/providers'
import BackButton from '../BackButton'

test('BackButton should render a left arrow and show a text if it is hovered', async () => {
  render(<BackButton />)

  const icon = screen.getByLabelText(/vissza/i)
  const text = screen.getByText(/vissza/i)

  expect(icon).toBeInTheDocument()
  expect(text).not.toBeVisible()
})
