function solve(arr) {

    let garage = {};

    for (const entry of arr) {
        // Разделяме записа на номер на гараж и информация за колата
        const [garageNumber, carInfo] = entry.split(' - ');


        if (!garage[garageNumber]) {
            garage[garageNumber] = [];
        }
        garage[garageNumber].push(carInfo)




    }

    for (const garageNumber in garage) {
        console.log(`Garage № ${garageNumber}`);
        for (const car of garage[garageNumber]) {
            // Преобразуваме информацията за колата в желания формат
            const formattedCarInfo = car.split(', ').map(info => {
                const [key, value] = info.split(': ');
                return `${key} - ${value}`;
            }).join(', ');
            console.log(`--- ${formattedCarInfo}`);
        }

    }
}
solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);