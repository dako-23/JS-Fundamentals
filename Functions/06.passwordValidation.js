function passwordValidation(password) {

    function checkIfValidLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false
        }
    }

    function checkIfAlphaNumeric(pass) {
        const pattern = /^\w+$/;
        if (pattern.test(pass)) {

            return true;
        } else {

            console.log("Password must consist only of letters and digits");
            return false;
        }

    }

    function checkIfMin2Digits(pass) {

        const pattern = /[0-9]{2,}/
        if (pattern.test(pass)) {

            return true;
        } else {

            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    const isValidLength = checkIfValidLength(password)
    const isAlphaNumeric = checkIfAlphaNumeric(password)
    const isMoreThan2Digits = checkIfMin2Digits(password)

    if (isValidLength && isAlphaNumeric && isMoreThan2Digits) {
        console.log("Password is valid");
    }




}
// passwordValidation('logIn');
// passwordValidation('Pa$s$s');
passwordValidation('MyPass123');