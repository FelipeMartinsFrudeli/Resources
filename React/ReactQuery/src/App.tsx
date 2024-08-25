import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from './fetchers/products'

function App() {

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  })

  return (
    <div className="card">
      <ul>
        {products?.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <hr />
    </div>
  )
}

export default App
