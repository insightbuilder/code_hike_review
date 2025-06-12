'use client'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log("⏱️ Starting timer...")
    const timer = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    return () => {
      console.log("🧹 Cleaning up...")
      clearInterval(timer)
    }
  }, [])

  return <p>Seconds passed: {seconds}</p>
}
