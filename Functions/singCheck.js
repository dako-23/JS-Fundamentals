function singCheck(number1, number2, number3) {

    const multiply = (x, y, z) => x * y * z;

    if (multiply(number1, number2, number3) < 0) {

        console.log('Negative');
    } else {
        console.log('Positive');
    }


}
singCheck(5, 12, -15);
singCheck(-6, -12, 4)