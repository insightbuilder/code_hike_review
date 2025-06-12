Different Hooks of React

| Hook          | Purpose                               | console.log Highlights          |
| ------------- | ------------------------------------- | ------------------------------- |
| `useState`    | Local state                           | Logs on every update            |
| `useEffect`   | Side effects / lifecycle              | Logs on mount, updates, cleanup |
| `useRef`      | DOM access / persist without rerender | Logs once (no render trigger)   |
| `useMemo`     | Cache computed value                  | Logs only when deps change      |
| `useCallback` | Memoize a function                    | Logs on call                    |
| `useContext`  | Share state across components         | Logs from provider and consumer |

## Use State:
const [count, setCount] = useState(0), this means the useState function returns a value and a function to set the values

## Use Effect:

useEffect(() => { ... }, deps) is used for side effects like:

- The "deps" matter, an it is a list

fetching data

setting up subscriptions

interacting with the DOM

timers (like setTimeout, setInterval)

```
useEffect(() => {
  console.log("🔁 Runs every time `count` changes")
}, [count]) => Here the deps is count

useEffect(() => {
  const timer = setInterval(() => {
    console.log("⏱ Tick")
  }, 1000)
    // can return a clean up function too
  return () => {
    console.log("🧹 Cleaning up...")
    clearInterval(timer)
  }
}, [])
```

## Use Memo:

const result = useMemo(() => slowFunction(value), [value])

The result above will be calculated only if the "deps" value gets changed. Else it won't be calculated.
This is not executed every render

## Use Callback:

```
 const handleClick = useCallback(() => {
    console.log("Clicked! Count was:", count)
    setCount(c => c + 1)
  }, [count])

  return <button onClick={handleClick}>Click {count}</button>
```

🧠 What's special about useCallback?
It memoizes the function, just like useMemo memoizes a value.

This means: handleClick keeps the same reference between renders unless count changes.

📌 Why it's useful:
Prevents unnecessary re-renders in child components.

Useful when passing callbacks to optimized components (React.memo).

So:

useCallback(fn, [deps]) = "Only recreate fn if deps change."

## Use Context:

```
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")
  console.log("Theme is:", theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
```

createContext(null):
Creates a React context — a kind of “global slot” to share data.

Inside ThemeProvider:

useState("light") creates theme and setTheme.

These are passed to <ThemeContext.Provider value={{ theme, setTheme }}>

So any child can read or change the theme.

useContext(ThemeContext):

Accesses the current context value (the { theme, setTheme } object).

No need to pass props manually through component trees.

```
<ThemeProvider>
  <App />
</ThemeProvider>
```

children → the UI that gets access to the context. children are the nested components inside <ThemeProvider> when you use it.

value → the data being shared (like theme, setTheme).

Instead of passing props down 4+ layers → just use useContext() to access shared state directly. 

## There are More Hooks

There are more (like useReducer, useLayoutEffect, useImperativeHandle) but you can learn those as needed.

## Props Practice

props are attributes that give give as argumeents to functions that is declared that returns html tags, correct. be brief

```
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>
}

<Greeting name="Kamal" />
```

The props are objects in reality, so the zod schema can instruct what the components prompt must be

You can use Zod to define a schema (like a prompt contract) for those props.

```
import { z } from "zod"

const GreetingProps = z.object({
  name: z.string(),
  age: z.number().optional()
})
```

```
function Greeting(props) {
  const parsed = GreetingProps.parse(props)
  return <h1>Hello, {parsed.name}</h1>
}
```

### Install Zod:

npm install zod

### Import Lesson:

If you export like this (named export):

```export function Greeting(props) { ... }```

Then you must import like this:

```import { Greeting } from '../components/Greeting'```

If you export like this (default export):

```export default function Greeting(props) { ... }```

Then you must import like this:

```import Greeting from '../components/Greeting'```

## How Props & Hooks interact?

✅ Brief answer:

Props bring data in, hooks manage data inside the component.

🔁 Flow:

Props: external → passed from parent

Hooks: internal → manage state, side effects, refs, etc.

Props can be used as Hooks dependencies

```
function Greeting({ name }) {
  useEffect(() => {
    console.log("Name prop changed:", name)
  }, [name]) // reacts to prop changes

  return <h1>Hello, {name}</h1>
}
```
## There is no need for express or other frameworks? be brief

With Next.js App Router + Server Components, you don’t need Express or other backend frameworks for:

Fetching data (APIs, databases)

Rendering HTML

Handling server logic

🧠 Next.js acts as both frontend + backend.

But you can add Express if:

You need custom routing/middleware

You have existing Express APIs to reuse

👉 For most modern apps: Next.js alone is enough.

### How to find if the component is React Server Comp?

| Component            | What to Look For                | Runs Where          |
| -------------------- | ------------------------------- | ------------------- |
| **Server Component** | ❌ No `'use client'` at top      | On server only      |
| **Client Component** | ✅ Has `'use client'` at the top | In browser (client) |


If it uses, useState, useEffect, useRef, etc. → needs 'use client'

If it uses, Async functions, database/API fetch, rendering → can be server component

## How does SPAs route

✅ SPAs can still have router pages, using libraries like:

React Router in plain React

Next.js App Router (which also supports SPA-like behavior)

But unlike multi-page apps, SPAs don’t reload the page — they change routes client-side.

👉 So: SPAs have pages, but routing is handled in JavaScript, not by the browser.

```
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/products">Go to Products</Link>
    </div>
  )
}
```

🧠 What happens:
✅ Only the changed part of the page is fetched/rendered.

✅ No full browser reload

✅ Feels instant (like an SPA)

✅ Preserves state in components (when possible)

So:
➡️ Next.js App Router = File-based routing with SPA behavior
➡️ Use <Link> instead of <a> to stay in SPA mode