import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Typography from '../../components/Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Test text',
}

export const CustomComponent = Template.bind({})

CustomComponent.args = {
  children: 'Custom component',
  component: 'h1',
}

export const Heading = Template.bind({})

Heading.args = {
  children: 'Heading',
  component: 'h1',
  variant: 'heading',
}

export const Huge = Template.bind({})

Huge.args = {
  children: 'Huge Heading',
  component: 'h1',
  variant: 'huge',
}
