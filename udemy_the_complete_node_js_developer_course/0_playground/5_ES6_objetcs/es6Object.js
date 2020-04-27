const name = "Andrew"
const userAge = 27

const user = {
    name,
    age: userAge,
    location: "Philadelphia"
}

console.log(user)

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined

}

// const label = product.label
// const stock = product.stock

const {label:productLabel, stock} = product
console.log(productLabel)