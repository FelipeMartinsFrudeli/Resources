/*
-> enriquecimento de dados!

1. le de um banco
2. bater em uma API para pegar o resto das informacoes
3. submeter os dados para outra API
*/

const myDB = async () => Array.from({ length: 1000 }, (v, index) => `${index}-cellphone`)

const PRODUCTS_URL = 'http://localhost:3030/products'
const CART_URL = 'http://localhost:4000/cart'

async function processData() {
  const products = await myDB()
  const responses = []

  for (const product of products) {
    const { data: productInfo } = await fetch(`${PRODUCTS_URL}?productName=${product}`)
    const { data: cartData } = await fetch(`${CART_URL}`, { method: 'POST', body: productInfo })
    responses.push(cartData)
  }

  return responses
}

// console.table(await processData())

async function* processDataGenerator() {
  const products = await myDB()

  for (const product of products) {
    const response = await fetch(`${PRODUCTS_URL}?productName=${product}`)
    const productInfo = await response.text()
    
    const responseCart = await fetch(`${CART_URL}`, { method: 'POST', body: productInfo })
    const cartData = await responseCart.text()

    yield cartData
  }
}

for await (const data of processDataGenerator()) {
  console.table(data)
}