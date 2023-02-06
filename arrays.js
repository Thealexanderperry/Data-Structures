// ? Arrays

/* 
    ? Array is a list-like object
    ? Prototype has methos to perform traversal and mutation operations
        * Denoted by [ ]
        * hold multiple data types
        * content can be accessed by their index

*/

let arr = []

console.log(arr) // creates empty array literal
// whenever you hard code something in, it is called a literal
console.log(Boolean(arr)) // ! empty array returns true


// ? How would you check that an array is empty?????

arr.length === 0 ? console.log("Empty") : console.log("Has Contents")

let carMake = ["BMW", "Porsche", "Maserati", "Pagani"]
console.log(carMake) // displays all contents of an array
console.log(carMake[1]) // Displays the value at an index
console.log(carMake[7]) // If !found it returns undefined, NOT a ReferenceError.



// ? Nesting, Assignment, & Reassignment

// Assign
carMake[4] = "Ferrari"
console.log(carMake)

carMake[carMake.length] = "Aston Martin"
console.log(carMake)


// Assign to a different variable:

let bmw = carMake[0]
console.log(bmw)

// reassign values

carMake[2] = "Yugo"
console.log(carMake)

// Nesting

carMake[carMake.length] = ["Toyota", "Honda", "Kia"]
console.log(carMake)

// ? How to access a nested array
console.log(carMake[6])
// ? How do I access Honda then?
console.log(carMake[6][1])

// Arrays can have many different data types

let manyDataTypes = [
    "string",
    [1, 5, 6],
    false,
    undefined,
    null,
    NaN,
    "some other string"
]

console.log(manyDataTypes)

// Data Types
console.log(typeof manyDataTypes) // returns object due to JS' OOP nature
console.log(manyDataTypes instanceof Array) // checking if datatype is an array



/* 
    ? Challenge

    * crate a variable named janCohort
    * Include everyones name as array interables
    * Nest an array with instructors name, TA's name, and Matt Nolan
    * Access Rishi's name and reassign to Jennifer
    * Access paul's name and reassign to Pablo
    ! SPICEY MODE: remove the last entry within the nested array
*/

let janCohort = ["Alex", "Tyler", "Ian", "Michael", "Rishi", "Jose"]
janCohort[4] = "Jennifer"
janCohort[janCohort.length] = ["Paul", "Dave", "Matt"]
janCohort[6][0] = "Pablo"
janCohort[6][2] = janCohort[[6][2] - 1]
console.log(janCohort)

let superNested = [1, [2, [3, [4, [5, "Some value", "jackpot"]]]]]
// get to the jackpot

console.log(superNested[1][1][1][1][2]) // Returns jackpot

