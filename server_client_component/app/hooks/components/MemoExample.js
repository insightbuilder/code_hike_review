'use client'
import { useMemo, useState } from 'react'

function slowFunction(n) {
  console.log("⚙️ Slow function running...")
  return n * 1000
}

export default function MemoExample() {
  const [value, setValue] = useState(1)

  const result = useMemo(() => slowFunction(value), [value])
  // result will be executed when the value has changed,even if the page is rendered again
  console.log("Rendered with result:", result)

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={e => setValue(Number(e.target.value))}
      />
      <p>Result: {result}</p>
    </>
  )
}
