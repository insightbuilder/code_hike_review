'use client'
import { useTheme } from './ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </>
  )
}
