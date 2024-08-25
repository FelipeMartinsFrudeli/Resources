// curl "localhost:3030/products?productName=cafe"

import { createServer } from 'http'
import { parse } from 'url'
import { randomUUID } from 'crypto'

const PORT = 3030

async function handler(request, response) {

  if (
    request.method === 'GET' &&
    request.url.includes('products')
  ) {
    const { query: { productName } } = parse(request.url, true)
    const result = {
      id: randomUUID(),
      product: productName
    }

    return response.end(JSON.stringify(result))
  }

  return response.end('hello')
}

createServer(handler)
  .listen(PORT, () => console.log(`products API is running at ${PORT}`))