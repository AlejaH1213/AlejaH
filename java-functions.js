// Functions challenges 9/1/23
// Write a function named marco that returns "polo".
// name: marco 
// input: none
// output: string, "polo"
// process: self-invocation function 
const marco = () => {
    return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// name: greeting
// input: name 
// output: string, "Welcome, <person's name here>!"
// process: string interpolation 
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Dre"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// name: oddOrEven 
// input: a number 
// output: a string, "<this number> is odd/even"
// process: string interpolation 
const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return `${number} is even`
    } else if (number % 2 !== 0) {
        return `${number} is odd`
    }
}
console.log(oddOrEven(8))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// name: triple
// input: a number
// output: a number
// process: a number will be multiplied by 3
const triple = (number) => {
    return number * 3
}
console.log(triple(69))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// name: multiply
// input: numberOne and numberTwo
// output: a number 
// process: the multiplication of two numbers 
const multiply = (numberOne, numberTwo) => {
    return numberOne * numberTwo 
}
console.log(multiply(69, 420))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// name: divisibleBy
// input: numberOne and numberTwo
// output: <numberOne> is even divisible by <numberTwo>
// process: division of <numberOne> by <numberTwo> and return wether is divisible or not
const divisibleBy = (numberOne, numberTwo) => {
    if (numberOne / numberTwo % 2=== 0) {
        return `${numberOne} is evenly divisible by ${numberTwo}`
    } else if (numberOne / numberTwo % 2!== 0) {
        return `${numberOne} is not evenly divisible by ${numberTwo}` 
    }
}
console.log(divisibleBy(69, 420))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// name: assignGrade
// input: number
// output: a string, a letter grade
// process: string interpolation to assign a nubmer to a grade
const assignGrade = (numberGrade) => {
    if (numberGrade === 5) {
        return 'A'
} else if (numberGrade === 4) {
        return 'B'
} else if (numberGrade === 3) {
        return 'C'
} else {
        return 'F'
}
}
console.log(assignGrade(2))  
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// name: isLonger
// input: two strings <stringOne> <stringTwo>
// output: a string, "the longest one"
// process: compare two strings length and return the one that is longest
const isLonger = (stringOne, stringTwo) => {
    if (stringOne.length > stringTwo.length) {
        return `${stringOne} is longer`
    } else if (stringOne.length < stringTwo.length) {
        return `${stringTwo} is longer` 
    } else {
        return "the strings are equal in length"
    }
}
console.log(isLonger("Dre's", "Aleja's"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// name: greaterNum
// input: two numbers
// output: a number and a string
// process: comparing two numbers and returning the greater one
const greaterNum = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        return `${numberOne} is greater than ${numberTwo}`
    } else if (numberOne < numberTwo) {
        return `${numberTwo} is greater than ${numberOne}`
    } else {
        return 'the numbers are equal'
    }
}
console.log(greaterNum(69, 420))  
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// name: yelling
// input: a string
// output: another string
// process: making a string upper case
const yelling = (myString) => {
    return myString.toUpperCase()
}
console.log(yelling("hey"))
//The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".