import { RawCode, Pre, highlight } from "codehike/code"
import { className } from "./annotations/classname"

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark")
  return (
  <Pre 
    code={highlighted} 
    handlers={[className]} 
    className="border border-zinc-800"
    />
  )
}