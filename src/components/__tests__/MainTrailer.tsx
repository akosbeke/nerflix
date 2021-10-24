import { screen } from '@testing-library/react'

import { render } from '../../test/providers'
import MainTrailer from '../MainTrailer'

jest.mock(
  'react-player',
  () =>
    function ReactPlayer() {
      return <iframe title="youtube video player"></iframe>
    },
)

test('MainTrailer renders a fullwidth YouTube video', () => {
  const video = {
    url: 'https://www.youtube.com/watch?v=Ibr41M7rNTg',
  }
  render(<MainTrailer {...video} />)

  expect(screen.getByTitle(/youtube video player/i)).toBeInTheDocument()
})
