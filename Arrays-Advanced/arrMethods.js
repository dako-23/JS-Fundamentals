// const arr = [1, 20, 50, 9, 6];

// arr.push(10);
// // --------------------
// const lastEl = arr.pop()
// console.log(lastEl);
// // --------------------
// arr.unshift(1, 2, 3)
// console.log(arr);
// // --------------------
// const firstEl = arr.shift();
// console.log(firstEl);
// // --------------------
// // return boolean
// arr.includes(20)
// // -------------------
// console.log(arr.indexOf());
// // ------------------- SLICE
// const arr1 = [1, 2, 3, 4];
// const clonedArr = arr1.slice()
// console.log(arr1, clonedArr);

// // -------------------- splice
const nums = [5, 10, 15, 20, 25, 30];
// const splicedArr = nums.splice(1, 4);
// console.log(splicedArr);
// console.log(nums);
console.log(nums.splice(3, 2, "test1", 'test2'));
console.log(nums);

