function solve(groupCount, groupType, dayOfWeek) {

    totalPrice = 0;
    singlePrice = 0;

    switch (groupType) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                singlePrice = 8.45;
                totalPrice = singlePrice * groupCount
            } else if (dayOfWeek === 'Saturday') {
                singlePrice = 9.80;
                totalPrice = singlePrice * groupCount
            } else {
                singlePrice = 10.46;
                totalPrice = singlePrice * groupCount
            }
            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                singlePrice = 10.90;
                totalPrice = singlePrice * groupCount
            } else if (dayOfWeek === 'Saturday') {
                singlePrice = 15.60;
                totalPrice = singlePrice * groupCount
            } else {
                singlePrice = 16;
                totalPrice = singlePrice * groupCount
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                singlePrice = 15;
                totalPrice = singlePrice * groupCount
            } else if (dayOfWeek === 'Saturday') {
                singlePrice = 20;
                totalPrice = singlePrice * groupCount
            } else {
                singlePrice = 22.50;
                totalPrice = singlePrice * groupCount
            }
            break;

    }

    if (groupType === 'Students' && groupCount >= 30) {
        totalPrice *= 0.85
    } else if (groupType === 'Business' && groupCount >= 100) {
        groupCount -= 10 * singlePrice;
    } else if (groupType === 'Regular' && groupCount >= 10 && groupCount <= 20) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);






}
solve(40,"Regular","Saturday");