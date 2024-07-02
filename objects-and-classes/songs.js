function songs(arr) {

    const numberOfSongs = arr.shift();
    const neededList = arr.pop()

    class Cat {
        typeList;
        name;
        time;
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        print() {

            if (neededList === 'all') {
                console.log(this.name);
            } else if (neededList === this.typeList) {
                console.log(this.name);
            }

        }

    }

    for (const tokens of arr) {

        const [typeList, name, time] = tokens.split('_');

        const song = new Cat(typeList, name, time);
        // const cat = new Cat(name, age);
        song.print()
    }

}
// songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])