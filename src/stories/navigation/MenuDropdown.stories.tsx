import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MenuDropdown, { MenuDropdownItem } from '../../components/MenuDropdown'
import Typography from '../../components/Typography'

export default {
  title: 'Navigation/MenuDropdown',
  component: MenuDropdown,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuDropdown>

const Template: ComponentStory<typeof MenuDropdown> = (args) => <MenuDropdown {...args} />

export const Default = Template.bind({})

Default.args = {
  children: <MenuDropdownItem>Test child</MenuDropdownItem>,
  menuItem: <Typography>Menu item</Typography>,
  width: 180,
}
