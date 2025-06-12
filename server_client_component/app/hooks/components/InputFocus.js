'use client'
import { useRef, useEffect } from 'react'

export default function InputFocus() {
  const inputRef = useRef(null)

  useEffect(() => {
    console.log("Focusing input...")
    inputRef.current?.focus() //inputref.current will point to actual DOM element
  }, []) // there are no deps, so will trigger on render
  // inputref is a pointer created by useRef(null) and it is assigned to 
  // input tag here
  return <input ref={inputRef} placeholder="I get focused!" />
}
