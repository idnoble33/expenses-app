
//Array Destructuring

const address = ['12990 Se Juniper Street', 'Edmonton', 'Alberta', 'T2O 3E3']

const [street, city, state, zip ] = address

console.log(`You are in ${city} ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
 const [type, , price2 ] = item

console.log(`You have ${type} with price of ${price2} `)




//Object Destructuring

// const person = {
//   name: 'Idowu',
//   age: 38,
//   location: {
//     city: 'Calgary',
//     temp: 5
//   }
// }
// //Using destructuring
// const {name, age} = person;
// console.log(`${name} is ${age}`)

// const {city, temp: temprature} = person.location;
// if(city && temprature){
//   console.log(`It's ${temprature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher

//   console.log(`The publisher name is ${publisherName}`)

