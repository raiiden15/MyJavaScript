//Normal For loops
//cntl + d to select all same elements

// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        // break; // iske baad kuch execute nahi hota
        // continue;  // Loop se bahar nahi aata
    }
    console.log(`Value of index is ${index}`);
}