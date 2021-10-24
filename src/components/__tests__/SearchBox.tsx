import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderHook } from '@testing-library/react-hooks'
import { useRouter } from 'next/router'
import { event as mockEvent } from '../../lib/ga'

import { render } from '../../test/providers'
import SearchBox from '../SearchBox'

jest.mock('next/dist/client/router', () => require('next-router-mock'))
jest.mock('../../lib/ga')

test('SearchBox should output a search icon and expand if clicked', () => {
  render(<SearchBox />)

  const input = screen.getByLabelText(/címek, emberek, műfajok/i)

  expect(input).not.toHaveClass('opened')

  userEvent.click(screen.getByLabelText(/keresés/i))

  expect(input).toHaveClass('opened')

  userEvent.type(input, 'test{enter}')

  const { result } = renderHook(() => useRouter())

  expect(mockEvent).toHaveBeenCalledTimes(1)
  expect(result.current.asPath).toBe('/search/test')
})
