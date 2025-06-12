import Counter from './components/Counter'
import Timer from './components/Timer'
import InputFocus from './components/InputFocus'
import MemoExample from './components/MemoExample'
import CallbackExample from './components/CallbackExample'
import { ThemeProvider } from './components/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function Page() {
  return (
    <main className="p-6 space-y-4">
      <h1>🧠 React Hooks Playground</h1>

      <Counter />
      <Timer />
      <InputFocus />
      <MemoExample />
      <CallbackExample />

      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </main>
  )
}
