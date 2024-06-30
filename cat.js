function cat(arr) {



    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for (const catStr of arr) {
        const [name, age] = catStr.split(' ');

        const cat = new Cat(name, age);
        cat.meow()

    }


}
cat(['Mellow 2', 'Tom 5']);