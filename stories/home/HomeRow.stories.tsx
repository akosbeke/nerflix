import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import HomeRow from '../../components/HomeRow'

export default {
  title: 'Home/HomeRow',
  component: HomeRow,
} as ComponentMeta<typeof HomeRow>

const Template: ComponentStory<typeof HomeRow> = (args) => <HomeRow {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Legújabb filmek',
}
