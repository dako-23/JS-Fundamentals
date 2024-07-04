function towns(arr) {



    for (const townStr of arr) {

        let tokens = townStr.split(" | ");

        let town = tokens.shift()
        let latitude = Number(tokens.shift()).toFixed(2)
        let longitude = Number(tokens.shift()).toFixed(2)


        let townsObj = {
            town,
            latitude,
            longitude,
        }
        console.log(townsObj);

    }


}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )