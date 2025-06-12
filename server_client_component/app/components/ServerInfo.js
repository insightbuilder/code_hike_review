export default function ServerInfo() {
  const now = new Date().toLocaleString()
  console.log("🧠 Server Component Render:", now)

  return <p>🧠 Server-rendered at: {now}</p>
}
