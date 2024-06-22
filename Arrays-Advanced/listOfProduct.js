function listOfProduct(arr) {


    const newList = arr.sort()
    // console.log(newList);


    for (let i = 0; i < newList.length; i++) {

        console.log(`${i + 1}.${newList[i]}`);

    }



}
// listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProduct(['Watermelon', 'Banana', 'Apples']);