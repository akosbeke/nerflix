import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ThumbnailNumber from '../../components/ThumbnailNumber'

export default {
  title: 'Components/ThumbnailNumber',
  component: ThumbnailNumber,
} as ComponentMeta<typeof ThumbnailNumber>

const Template: ComponentStory<typeof ThumbnailNumber> = (args) => <ThumbnailNumber {...args} />

export const Default = Template.bind({})

Default.args = {
  number: 1,
  title: 'Test item',
  src: 'https://dummyimage.com/426x597/000/fff',
}
