import ServerInfo from './components/ServerInfo'
import ClientButton from './components/ClientButton'
import Page from './hooks/page'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to RSC + Client Component Demo</h1>

      <ServerInfo />
      <ClientButton />
      <Page />
      <Link href="/products">Here I come Products</Link>
    </main>
  )
}
