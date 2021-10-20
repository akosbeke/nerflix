import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../../test/providers'
import MenuDropdown from '../MenuDropdown'

test('MenuDropdown should render an item with a dropdown container', async () => {
  const menu = {
    menuItem: <div>Item</div>,
    children: <div>Content</div>,
    width: 200,
    timeout: 100,
  }

  render(<MenuDropdown {...menu} />)

  const item = screen.getByText(/item/i)
  const children = screen.getByText(/content/i)

  expect(item).toBeInTheDocument()
  expect(children).toBeInTheDocument()
  expect(children).not.toBeVisible()

  userEvent.hover(item)

  expect(children).toBeVisible()

  userEvent.unhover(item)

  expect(children).toBeVisible()

  await waitFor(() => expect(children).not.toBeVisible())
})
