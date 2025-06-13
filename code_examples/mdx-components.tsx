import type { MDXComponents } from "mdx/types"
import { Code } from "./app/components/code"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log("comp", components)
  console.log("Code", Code)
  return {
    ...components,
    Code,
  }
}
