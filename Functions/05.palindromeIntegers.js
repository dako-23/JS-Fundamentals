function palindromeIntegers(arr) {

    function checkIfPalindrome(num) {

        const numString = num + "";
        let numStringReversed = "";

        for (let i = numString.length - 1; i >= 0; i--) {

            const curChar = numString[i];
            numStringReversed += curChar;
        }

        if (numString === numStringReversed) {

            return true
        } else {

            return false
        }

    }

    for(const num of arr){
        const isPalidrome = checkIfPalindrome(num)
        console.log(isPalidrome);
    }

}
palindromeIntegers([123, 323, 421, 121]);