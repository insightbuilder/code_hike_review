import { remarkCodeHike, recmaCodeHike } from "codehike/mdx"
import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  // optional (see code docs):
  components: { code: "Code" },
  // if you can't use RSC:
  // syntaxHighlighting: {
  //   theme: "github-dark",
  // },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    jsx: true,
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
