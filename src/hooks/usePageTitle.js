import { useEffect } from 'react'

export function usePageTitle(title, accentColor = 'white') {
  useEffect(() => {
    document.title = title ? `${title} | cynthia shen` : 'cynthia shen'
    document.documentElement.style.setProperty('--background-color', accentColor)
    return () => {
      document.title = 'cynthia shen'
      document.documentElement.style.setProperty('--background-color', 'white')
    }
  }, [title, accentColor])
}
