function firstAndLast(arr){

const firstEl = Number(arr.shift());
const lastEl = Number(arr.pop());

console.log(firstEl + lastEl);



}
firstAndLast(['20', '30', '40']);
firstAndLast(['5', '10']);