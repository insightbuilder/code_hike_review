// app/products/page.js
export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.products.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  )
}
