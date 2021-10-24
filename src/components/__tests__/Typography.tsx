import { screen } from '@testing-library/react'

import { render } from '../../test/providers'
import Typography from '../Typography'

const text = 'Test text'

test('Typography should default to div as an element and body as variant', () => {
  render(<Typography>{text}</Typography>)

  expect(screen.getByText(text, { selector: 'div.body' })).toBeInTheDocument()
})

test('Typography should accept a different HTML element as component prop', () => {
  render(<Typography component="h1">{text}</Typography>)

  expect(screen.getByText(text, { selector: 'h1.body' })).toBeInTheDocument()
})

test('Typography should be able to display a text with heading styles', () => {
  render(
    <Typography component="h1" variant="heading">
      {text}
    </Typography>,
  )

  expect(screen.getByText(text, { selector: 'h1.heading' })).toBeInTheDocument()
})
