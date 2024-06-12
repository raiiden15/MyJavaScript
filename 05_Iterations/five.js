const coding = ["JS", "Ruby", "Java", "Python", "Cpp"]

// For Each in 
coding.forEach(function (item){
    // console.log(item);
})

// for each using arrow function
coding.forEach((element) => {
    // console.log(element);
});

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe);

// it has parameters index and pura array also
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        langName: "JavaScript",
        langFileName: "JS"
    },
    {
        langName: "Python",
        langFileName: "PY"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
]

myCoding.forEach(element => {
    // console.log(element); ////Apne pass direct access h object ka, therefore pura print hojata
    // console.log(element.langFileName);
});