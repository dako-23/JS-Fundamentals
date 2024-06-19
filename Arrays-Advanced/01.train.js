function train(arr) {

    let wagons = arr.shift().split(" ").map(Number)
    const capacity = Number(arr.shift())


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.includes('Add')) {
            let tokens = element.split(' ')
            let passengers = Number(tokens[1]);
            wagons.push(passengers);
        } else {
            let newPassengers = Number(element);

            for (let j = 0; j < wagons.length; j++) {
                if(wagons[j] + newPassengers <= capacity){
                    wagons[j] += newPassengers;
                    break;
                }

            }
        }

    }


console.log(wagons.join(' '));








}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']
);