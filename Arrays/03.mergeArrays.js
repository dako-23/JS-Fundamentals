function solve(arr1, arr2) {

    let newArr = [];


    for (let i = 0; i < arr1.length; i++) {

        let el1 = arr1[i];
        let el2 = arr2[i];

        if (i % 2 === 0){
            let sum = Number(el1) + Number(el2)
            newArr.push(sum)
        }else{
            let concatenate = el1 + el2
            newArr.push(concatenate);
        }
    }

    console.log(newArr.join(" - "));



}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);