import * as NextImage from 'next/image'
import { withThemesProvider } from 'themeprovider-storybook'

import { defaultTheme } from '../src/config/theme'

import '../src/styles/slick.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

// Styled component theme provider
const themes = [
  {
    name: 'Default theme',
    backgroundColor: defaultTheme.colors.background,
    ...defaultTheme,
  },
]

export const decorators = [withThemesProvider(themes)]
