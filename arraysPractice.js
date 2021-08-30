// Essential Array Methods

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

// Filter Method

const filteredItems = items.filter((item) => {
    // filters array elements based on contrictions below

    return item.price <= 100
})
console.log('Filter Method:')
console.log(filteredItems)

//  MAP method

const itemNames = items.map((item) => {
    // grabs the value that you want (name, price)

    return item.name
})

console.log('MAP Method:')
console.log(itemNames)

// Find Method

const foundItem = items.find((item) => {


    return item.name = 'Book'
})

console.log("Find Method:")
console.log(foundItem)

// ForEach Method

items.forEach((item) => {
    // psuedo for loop

    console.log(item.name)
})

// Some Method

const hasInexpensiveItems = items.some((item)=> {
    // checks to see if any item false under conditions

    return item.price <= 100
})

console.log('Some Method:')
console.log(hasInexpensiveItems)

// Every Method

const hasAllInexpensiveItems = items.every((item)=> {
    // checks to see if all items false under conditions

    return item.price <= 100
})

console.log('Every Method:')
console.log(hasAllInexpensiveItems)

// Reduce Method 

const total = items.reduce((currentTotal, item) => {
    // runs a function on every item in an array

    return item.price + currentTotal
}, 0)

console.log('Reduce Method:')
console.log(total)

// Includes Method

const includesTwo = items.includes(2)
// checks to see if array includes 2

console.log("Includes Method:")
console.log(includesTwo)