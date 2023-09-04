var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
var items = ["granola"]
console.log(groceryList.concat(items))
// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))
// Write the code that will add "beans" to the "chips" and "dip" array.
var itemsTwo = groceryList.slice(0, 2)
itemsTwo.push("beans")
console.log(itemsTwo)

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var numbersTwo = [0]
console.log(numbersTwo.concat(numbers))

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
// Write the code that returns the number at the third index.
console.log(numSet[3])

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join()) --> y,a,r,r,a
console.log(characters.join("")) //--> yarra
// console.log(characters.join(" ")) --> y a r r a
// console.log(characters.join("-")) --> y-a-r-r-a
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))
// Create two arrays consisting of three first names of your cohort members in each array.
var arrayOne = ["Dre", "Tori", "Anabella"]
var arrayTwo = ["Rto", "Shaun", "Josh"]
// Write the code that sorts the names in alphabetical order.
console.log(arrayOne.sort())
console.log(arrayTwo.sort())
// Write the code that sorts the names in reverse alphabetical order.
console.log(arrayOne.sort().reverse())
console.log(arrayTwo.sort().reverse())
// Write the code that sorts all the names in alphabetical order in a single array.
// var arrayThree = arrayOne.concat(arrayTwo)
// console.log(arrayThree.sort()) --> same answer as 62 but longer procedure 
console.log(arrayOne.concat(arrayTwo).sort())

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
// Write the code that adds the values from odd indexes into the oddIndexes array.

// this for loop did this: created a variable i that is index, and because I wanted the odd numbers i had this loop to start at index 1. then I told him that in each loop check if i continues to be smaller than the length of the array with numbers.lenght and to run until it stops, and in each itiration to add 2 more. 
// I dont understand line 70, why console.log? 
for (let i = 1; i < numbers.length; i += 2) {
    console.log(numbers[i]) //<-- what is this line doing ???
    oddIndexes.push(numbers[i])
} 
console.log(oddIndexes)
