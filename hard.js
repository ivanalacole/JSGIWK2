// HARD: Given the information below for Tom and Jerry.
// ● Tom - height: 9 in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. 
//Calculate both their BMI’s. Create a Boolean
// variable containing information about whether /
//Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 
//( e.g. Is Tom’s BMI higher than Jerry’s? false).



// BMI = mass / height ^2 = mass / (height * height)

const tomBMI = 8 / (9 * 9)
const jerryBMI =  45 / (10 * 10)

const higherBMI = Boolean (tomBMI > jerryBMI)

if (tomBMI > jerryBMI) {
    console.log(`Is Tom BMI being higher than Jerry's ? ${higherBMI}`)
} else {
    console.log(`Is Jerry BMI being higher than Tom ? ${higherBMI}`)
}

