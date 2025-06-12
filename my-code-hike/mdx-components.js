export function useMDXComponents(components) {
  return {
        // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ color: 'green', fontSize: '36px' }}>{children}</h2>
    ),
    ...components,
  }
}