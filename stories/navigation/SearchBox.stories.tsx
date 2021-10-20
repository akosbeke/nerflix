import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchBox from '../../components/SearchBox'

export default {
  title: 'Navigation/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>

const Template: ComponentStory<typeof SearchBox> = () => <SearchBox />

export const Default = Template.bind({})
