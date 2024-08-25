export async function getProducts() {

    // delay 1s
    await new Promise(resolve => setTimeout(resolve, 1000))

    return [
        { id: 1, name: 'product 1', price: 80 },
        { id: 2, name: 'product 2', price: 20 },
        { id: 3, name: 'product 3', price: 30 },
        { id: 4, name: 'product 4', price: 50 },
    ]
}