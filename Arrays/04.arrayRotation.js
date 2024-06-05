function solve(arr, totRotations) {


for(let curRot = 1; curRot <= totRotations; curRot++){
    let firtsEl = arr.shift();
    arr.push(firtsEl);

}

console.log(arr.join(" "));

}
solve([51, 47, 32, 61, 21], 2);