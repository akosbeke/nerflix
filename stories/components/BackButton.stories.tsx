import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BackButton from '../../components/BackButton'

export default {
  title: 'Components/BackButton',
  component: BackButton,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BackButton>

const Template: ComponentStory<typeof BackButton> = () => <BackButton />

export const Default = Template.bind({})
