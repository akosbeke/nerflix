import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Thumbnail from '../../components/Thumbnail'

export default {
  title: 'Components/Thumbnail',
  component: Thumbnail,
} as ComponentMeta<typeof Thumbnail>

const Template: ComponentStory<typeof Thumbnail> = (args) => <Thumbnail {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Test item',
  src: 'https://dummyimage.com/341x192/000/fff',
}
