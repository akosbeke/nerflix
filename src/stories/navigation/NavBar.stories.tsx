import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NavBar from '../../components/NavBar'

export default {
  title: 'Navigation/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />

export const Default = Template.bind({})

export const LogoOnly = Template.bind({})
LogoOnly.args = {
  logoOnly: true,
}
