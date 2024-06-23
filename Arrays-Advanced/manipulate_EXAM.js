function manipulate(input) {
    let commands = input.slice(1);
    let numbers = input[0].split(' ').map(Number);

    for (let command of commands) {
        let [action, value, replacement] = command.split(' ');

        if (action === "Finish") {
            break;
        }

        if (action === "Add") {

            numbers.push(Number(value));

        } else if (action === "Remove") {

            numbers = numbers.filter(num => num !== Number(value));

        } else if (action === "Replace") {
            let replaced = false;

            numbers = numbers.map(num => {

                if (!replaced && num === Number(value)) {
                    replaced = true;
                    return Number(replacement);
                }
                return num;

            });
        } else if (action === "Collapse") {

            let collapseValue = Number(value);

            numbers = numbers.filter(num => num >= collapseValue);

        }
    }

    return numbers.join(' ');
}

console.log(manipulate(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"]))