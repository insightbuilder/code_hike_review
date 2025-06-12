'use client'
import { z } from "zod"

const GreetingProps = z.object({
  name: z.string(),
  age: z.number().optional()
})

export default function Greeting(props) {
  const parsed = GreetingProps.parse(props)
  return <h1>Hello, {parsed.name} {parsed.age ?? ''}</h1>
}