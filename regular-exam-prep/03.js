function solve(input) {

    class Hero {

        constructor(name, hp, mp) {
            this.name = name;
            this.hp = hp;
            this.mp = mp;
        }

        Heal() {

            if (hp <= 100) {
                hp += amount
                console.log(`${name} healed for ${amount} HP!`);
            }
        }

        TakeDamage() {
            if (hp > 0) {
                hp -= damage
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hp} HP left!`);
            } else {
                console.log(`${name} has been killed by {attacker}!`);
            }
        }

        Recharge() {
            if (mp <= 200) {
                mp += amount
                console.log(`${name} recharged for ${amount} MP!`);
            }
        }

        CastSpell() {

            if (hp > 0) {
                hp -= damage
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hp} HP left!`);
            } else {
                console.log(`${name} has been killed by {attacker}!`);
            }

        }

    }


    const n = Number(input.shift());
    const party = {};

    for (let i = 0; i < n; i++) {
        const [name, hp, mp] = input.shift().split(' ');
        party[name] = new Hero(name, hp, mp);
    }

    while (input[0] !== 'End') {

        const line = input.shift()
        const tokens = line.split(' - ')
        const [action, name] = tokens;
        const hero = party[name]
        hero[action]()
        

    }








}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);


// Solmyr healed for 10 HP!
// Solmyr recharged for 50 MP!
// Kyrre was hit for 66 HP by Orc and now has 33 HP left!
// Kyrre has successfully cast ViewEarth and now has 35 MP!
// Solmyr
//   HP: 95
//   MP: 170
// Kyrre
//   HP: 33
//   MP: 35