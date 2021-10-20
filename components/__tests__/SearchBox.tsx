import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../../test/providers'
import SearchBox from '../SearchBox'

test('SearchBox should output a search icon and expand if clicked', () => {
  render(<SearchBox />)

  const input = screen.getByLabelText(/címek, emberek, műfajok/i)

  expect(input).not.toHaveClass('opened')

  userEvent.click(screen.getByLabelText(/keresés/i))

  expect(input).toHaveClass('opened')
})
