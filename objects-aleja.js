// const person = {
//     firstName: "Arthur",
//     lastName: "Dent"
// }
// Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// // Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// const person = {
// //     firstName: "Arthur",
// //     lastName: "Dent",
// //     homePlanet: "Earth"
// // }
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
const person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    information: function () {
        return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
    }
}
console.log(person.information())
//------------------------------------------------------------------------------------
//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const product = {
    name: "chair",
    price: 24.99,
    describeProduct: function () {
        return `The product is a ${this.name}. It costs ${this.price}`
    },
    totalWithTax: function () {
        let taxRate = 0.07
        let taxAmound = this.price*taxRate
        let totalPrice = Math.round(this.price + taxAmound)
        return totalPrice
    }
  }
console.log(product.totalWithTax());
//----------------------------------------------------------------------------------
const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    food: function () {
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]},${this.ingredients[1]}, and ${this.ingredients[2]}.`
    } //<--- METHOD
  }

const food = (recipe) => {
    return `The ingredients for a ${recipe.name} ${recipe.type} are ${recipe.ingredients}.`
  } //<--- TAKES A FUNCTION AS A PARAMETER
console.log(food(lunch)) 
//output: The ingredients for a undefined undefined are undefined.
//   Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
//   Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
// //   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.food());
//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana.
// <---- WHEN IT SAYS METHOD, IT IS INSIDE OF THE OBJECT, WHEN IT SAYS USE AS PARAMETER IS OUTSIDE AND IT IS A DIFFERENT FUNCTION AND THEN THE OBJECT IS GOING TO BE THE PARAMETER
//------------------------------------------------------------------------------------
const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
  ]
//   Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// pseudocode:
// name of the function: cats
// input: an array of animal objects
// output: a new array with only the objects that are cats
// process: iteration with .filter to get the objects that are cats, a new variable to store the new array 

const cats = animals.filter((value) => value.type === "cat")
console.log(cats) //<----- HIGHER ORDER FUNCTION

//   Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const nameAnimal= animals.map((value) => value.name)

console.log(nameAnimal) // <--- HIGHER ORDER FUNCTION
//   Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const ageAnimals = animals.filter((value) => value.age > 10).map((value)=> value.name)
console.log(ageAnimals) // <---- TO GET BOTH THINGS, FIRST I FILTERED OVER 10 AND THEN I ASKED MAP TO GIVE ME JUST THE NAME OF THOSE FILTERED, EACH METHOD .FILTER AND .MAP CREATES A NEW ARRAY
//   Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const animalSentence = animals.map((value)=> `${value.name} is very cute`)

console.log(animalSentence)
//-----------------------------------------------------------------------------------
const author = {
    names: "H. G. Wells",
    genre: "science fiction"
  }
// Write the code that destructures the author object so that the following code snippet will run successfully:
const {names, genre} = author
console.log(`${names} is a ${genre} author`)
//-------------------------------------------------------------------------------------
const pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
  }
  
  const pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
  }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
const describePokemon = ({species, pokemon_type}) => {
    return `${species} is a ${pokemon_type} pokemon`
} 
console.log(describePokemon(pokeOne))
// output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// output: "Magikarp is a Water pokemon"
//----------------------------------------------------------------------------------------------
const triangleDimensions = {
    base: 2,
    height: 5,
    area: function () {
        return this.base*this.height //<--- not right but the idea is there lol 
    }
  }
  triangleDimensions.base = 6
console.log(triangleDimensions.area())
//   Modify the triangleDimensions object to have a method that returns the area of the triangle.
//   Write the code that will update the base to be the value of 6
//----------------------------------------------------------------------------------------------
const learn = {
    cohorts: {
      2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"],
      2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"]
    }
  }
// Write the code that logs the name of your cohort.
console.log(learn.cohorts[2023][5])
// Write the code that uses destructuring to log the name of your cohort.
const {cohorts: {2023:[Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliet] }} = learn
console.log(`I am in ${Foxtrot}`) //<--- no idea what is this
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.


