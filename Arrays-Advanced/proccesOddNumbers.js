function proccessOddNumbers(arr) {

    resultArr = [];

    for (let index = 0; index < arr.length; index++) {
        const num = arr[index];

        if(index % 2 !== 0){
            const oddNum = num * 2;
            resultArr.unshift(oddNum)
        }

        
    }



    console.log(resultArr);



}
proccessOddNumbers([10, 15, 20, 25]);
proccessOddNumbers([3, 0, 10, 4, 7, 3]);