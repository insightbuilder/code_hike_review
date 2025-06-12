'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(10)
  console.log("Rendered with count:", count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count is: {count}</p>
    </div>
  )
}
