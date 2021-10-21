import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import UserSwitcher from '../../components/UserSwitcher'

export default {
  title: 'UserSwitcher/UserSwitcher',
  component: UserSwitcher,
} as ComponentMeta<typeof UserSwitcher>

const Template: ComponentStory<typeof UserSwitcher> = (args) => <UserSwitcher {...args} />

export const Default = Template.bind({})

Default.args = {
  users: [
    { name: 'Teszt név', image: '🍊', startColor: 'rgba(204, 113, 0, 1)', endColor: 'rgba(255, 141, 0, 1)' },
    { name: 'Teszt név 2', image: '🍎', startColor: 'red', endColor: 'blue' },
    { name: 'Gyerekeknek', image: 'kids' },
  ],
}
