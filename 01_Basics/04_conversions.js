console.log("2" > 1); //Ensure that dT are same. therefore we use TypeScript.
console.log("02" > 1);

console.log(null == 0); // gives false
console.log(null >= 0); // gives true,  equality check == and comparisons <> <= >= works differently. Comparisions convert null to a number, treating it as 0. Thats why null >= 0 is true and null > 0 is false along with null == 0. 

// console.log(undefined < 0); always false. \

// === strict check, i.e also checks dataType.

// console.log("2" == 2); // gives true since its not checking it strictly.
// console.log("2" === 2); // gives false since its checking it strictly.