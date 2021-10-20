import React from 'react'
import { screen } from '@testing-library/react'

import { render } from '../../test/providers'
import HomeRow from '../HomeRow'

jest.mock(
  'react-slick',
  () =>
    function Slider({ children }: { children: React.ReactNode[] }) {
      return <>{children}</>
    },
)

test('HomeRow should render 12 thumbnails and a title', () => {
  const title = 'Test'
  render(<HomeRow title={title} />)

  expect(screen.getByText(title)).toBeInTheDocument()
  expect(screen.getAllByAltText(/elk\*rtuk/i).length).toBe(12)
})
