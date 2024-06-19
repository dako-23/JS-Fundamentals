function distinctArr(arr) {

    let result = [];

  for (const num of arr) {

    if(!result.includes(num)){
        result.push(num)
    }
    
  }

    console.log(result.join(' '));
}
distinctArr([1, 2, 3, 4]);
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);