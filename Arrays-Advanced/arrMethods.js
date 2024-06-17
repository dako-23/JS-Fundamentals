const arr = [1, 20, 50, 9, 6];

arr.push(10);
// --------------------
const lastEl = arr.pop()
console.log(lastEl);
// --------------------
arr.unshift(1, 2, 3)
console.log(arr);
// --------------------
const firstEl = arr.shift();
console.log(firstEl);
// --------------------
// return boolean
arr.includes(20) 
// -------------------
console.log(arr.indexOf());