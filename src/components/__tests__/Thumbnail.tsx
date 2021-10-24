import { screen } from '@testing-library/react'

import { render } from '../../test/providers'
import Thumbnail from '../Thumbnail'

test('Thumbnail should render an image with accessibility', () => {
  const item = {
    title: 'Test item',
    src: 'https://dummyimage.com/341x192/000/fff',
  }
  render(<Thumbnail {...item} />)

  expect(screen.getByAltText(item.title)).toBeInTheDocument()
})
