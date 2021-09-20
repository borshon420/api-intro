// javascript object Notation
// JSON
const user = {id: 11, name: 'Gorib Amir', job: 'Actor'}
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

const shop = {
    name: 'Alia Bhatt',
    address: 'Ranbir Road',
    price: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop)

// console.log(shop)
console.log(shopStringified)

const converted = JSON.parse(shopStringified)
console.log(converted)
