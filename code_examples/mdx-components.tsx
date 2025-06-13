import type { MDXComponents } from "mdx/types"
// import { Code } from "./app/components/code"
import { Code } from "./app/components/classCode"
// import { Code } from "./app/cblocks/page"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Code,
  }
}
