function solve(group, type, day) {

    let singlePrice = 0;

    switch (day) {
        case 'Friday':
            if (type === 'Students') {
                singlePrice = 8.45;
            } else if (type === 'Business') {
                singlePrice = 10.9;
            } else if (type === 'Regular') {
                singlePrice = 15;
            }
            break;
        case 'Saturday':
            if (type === 'Students') {
                singlePrice = 9.8;
            } else if (type === 'Business') {
                singlePrice = 15.6;
            } else if (type === 'Regular') {
                singlePrice = 20;
            }
            break;

        case 'Sunday':
            if (type === 'Students') {
                singlePrice = 10.46;
            } else if (type === 'Business') {
                singlePrice = 16;
            } else if (type === 'Regular') {
                singlePrice = 22.5;
            }
            break;
    }

    let totalPrice = group * singlePrice;

    if (type === 'Students' && group >= 30) {
        totalPrice *= 0.85;
    } else if (type === 'Business' && group >= 100) {
        group -= 10 * singlePrice;
    } else if (type === 'Regular' && group >= 10 && group <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);




}
solve(30, "Students", "Sunday");
solve(40,
    "Regular",
    "Saturday");