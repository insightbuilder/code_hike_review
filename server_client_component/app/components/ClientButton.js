'use client'
import { useState } from 'react'

export default function ClientButton() {
  const [count, setCount] = useState(0)
  console.log("🎯 Client Component Render:", count)

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}