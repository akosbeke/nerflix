import { GOOGLE_ANALYTICS } from '../../config'

// log the pageview with their URL
export const pageview = (url: string) => {
  window.gtag('config', GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }: { action: string; params: {} }) => {
  window.gtag('event', action, params)
}
