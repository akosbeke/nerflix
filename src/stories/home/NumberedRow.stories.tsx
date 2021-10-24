import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NumberedRow from '../../components/NumberedRow'

export default {
  title: 'Home/NumberedRow',
  component: NumberedRow,
  decorators: [
    (Story) => (
      <div style={{ marginTop: '8vw' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof NumberedRow>

const Template: ComponentStory<typeof NumberedRow> = () => <NumberedRow />

export const Default = Template.bind({})
