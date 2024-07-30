function solve(input) {

    class Hero {

        constructor(name, hp, mp) {
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);
        }

        Heal(tokens) {

            const [_, name, amount] = tokens

            const checkHp = this.hp + Number(amount)
            const betweenHp = 100 - this.hp
            // console.log('---------');
            // console.log(betweenHp);
            // console.log('---------');

            if (checkHp <= 100) {
                let newHp = Number(amount) + this.hp
                this.hp = newHp
                
                console.log(`${name} healed for ${amount} HP!`);

            } else {
                
                this.hp = 100
                console.log(`${name} healed for ${betweenHp} HP!`);
            }

        }

        Recharge(tokens) {
            const [_, name, amount] = tokens

            const checkMp = this.mp + Number(amount)
            const betweenMp = 200 - this.mp
            // console.log('---------');
            // console.log(betweenHp);
            // console.log('---------');

            if (checkMp <= 200) {
                let newMp = Number(amount) + this.mp
                this.mp = newMp
                console.log(`${name} recharged for ${amount} MP!`);

            } else {
                // let newHp = Number(amount) + this.hp
                this.mp = 200
                
                console.log(`${name} recharged for ${betweenMp} MP!`);
            }
        }

        TakeDamage(tokens) {
            const [_, name, damage, attacker] = tokens

            if (this.hp > damage) {
                this.hp -= damage
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete party[this.name]
            }
        }

        CastSpell(tokens) {
            const [_, name, damage, attacker] = tokens

            if (this.mp >= Number(damage)) {
                let newMp = this.mp - damage
                this.mp = newMp

                console.log(`${name} has successfully cast ${attacker} and now has ${newMp} MP!`);
            } else if (Number(damage) > this.mp) {
                console.log(`${name} does not have enough MP to cast ${attacker}!`);
            }

        }

    }


    const n = Number(input.shift());
    const party = {}

    for (let i = 0; i < n; i++) {

        const [name, hp, mp] = input.shift().split(' ');
        const hero = new Hero(name, hp, mp)
        party[name] = new Hero(name, hp, mp);
    }

    while (input[0] !== 'End') {

        const line = input.shift()
        const tokens = line.split(' - ')
        const [action, name] = tokens
        const hero = party[name]
        hero[action](tokens);


    }

    for (const name in party) {
        const hero = party[name];
        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);

    }








}

// solve([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End',
// ]);

solve([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
])


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