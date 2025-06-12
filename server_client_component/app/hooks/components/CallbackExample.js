'use client'
import { useCallback, useState } from 'react'

export default function CallbackExample() {
  const [count, setCount] = useState(0) 

  const handleClick = useCallback(() => {
    console.log("Clicked! Count was:", count)
    setCount(c => c + 1)
  }, [count])

  return <button onClick={handleClick}>Click {count}</button>
}
