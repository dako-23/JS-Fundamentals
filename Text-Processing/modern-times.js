function solve(str) {

    str = str.split(" ");

    const filteredStr = str.filter(word => word.startsWith('#') && word.length > 1);

    const temporary = /\b[A-Za-z]+\b/;

    for (let el of filteredStr) {

        el = el.substring(1);

        if (temporary.test(el)) {
            console.log(el);

        }

    }







}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');