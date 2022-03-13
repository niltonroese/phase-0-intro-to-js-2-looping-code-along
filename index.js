// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";
let newArray = [];

function writeCards (names,event) {
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}
countDown (10)

// let countDown = (n) => {
//     let i = 10;
//     while (i >= 0) {
//         console.log(i--);
//     }
// }
// countDown(10)