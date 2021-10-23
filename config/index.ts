import { UserItemProps } from '../components/UserSwitcher'

export const SITENAME = 'NERflix'
export const VIDEO_URL = 'https://www.youtube.com/watch?v=Ibr41M7rNTg'
export const GOOGLE_ANALYTICS = 'G-63QRHEN9TX'
export const USERS: UserItemProps[] = [
  {
    name: 'Én',
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
  { id: 0, text: 'Rekordokat döntöget az Elk*rtuk az IMDB-n' },
  { id: 1, text: 'Új megjelenés, amire egy egész ország várt: Elk*rtuk' },
  { id: 2, text: '"Mi magyarok tudjuk, hogy mit szeretünk nézni" - elindult a NERflix' },
]
