import { screen } from '@testing-library/react'

import ThumbnailNumber from '../ThumbnailNumber'
import { render } from '../../test/providers'

test('ThumbnailNumber should render an image with the corresponding rank number', () => {
  const item = {
    number: 1,
    title: 'Test item',
    src: 'https://dummyimage.com/341x192/000/fff',
  }
  render(<ThumbnailNumber {...item} />)

  expect(screen.getByAltText(item.title)).toBeInTheDocument()
  expect(screen.getByText(item.number)).toBeInTheDocument()
})
