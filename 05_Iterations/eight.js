// REDUCE, refer to MDN docs
const myNums = [1, 2, 3]

// acc - accumalator
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and current value is: ${currval}`);
//     return acc + currval;
// }, 0); // here 0 is out initial value

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "android dev course",
        price: 5999
    },
    {
        itemName: "ds course",
        price: 12999
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(total);