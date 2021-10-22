import { UserItemProps } from '../components/UserSwitcher'

export const SITENAME = 'NERflix'
export const VIDEO_URL = 'https://www.youtube.com/watch?v=Ibr41M7rNTg'
export const USERS: UserItemProps[] = [
  {
    name: 'Teszt név',
    image: '🍊',
    startColor: 'rgba(204, 113, 0, 1)',
    endColor: 'rgba(255, 141, 0, 1)',
  },
  {
    name: 'Gyerekeknek',
    image: 'kids',
    url: 'https://csalad.hu/tamogatasok/csok',
  },
]
export const NOTIFICATIONS = [
  { id: 0, text: 'Új megjelenés, amire egy egész ország várt: Elk*rtuk' },
  { id: 1, text: '"Mi magyarok tudjuk, hogy mit szeretünk nézni" - elindult a NERflix' },
]
