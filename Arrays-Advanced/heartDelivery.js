function hearDelivery(arr) {

    let neighboors = arr.shift().split('@')

    let command = arr.shift();


    while (command !== 'Love!') {

        let tokens = command.split(' ');
        let action = tokens.shift();
        let heartCount = Number(tokens.shift());

        command = arr.shift();
    }

    









}
hearDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);