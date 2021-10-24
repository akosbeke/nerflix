import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MainTrailer from '../../components/MainTrailer'

export default {
  title: 'Home/MainTrailer',
  component: MainTrailer,
} as ComponentMeta<typeof MainTrailer>

const Template: ComponentStory<typeof MainTrailer> = (args) => <MainTrailer {...args} />

export const Default = Template.bind({})

Default.args = {
  url: 'https://www.youtube.com/embed/Ibr41M7rNTg',
}
