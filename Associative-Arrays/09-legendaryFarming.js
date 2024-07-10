function legendaryFarming(str) {

    const keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    const junkElements = {};
    const legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' }

    const materialsInfo = str.split(' ');

    for (let i = 0; i < materialsInfo.length; i += 2) {

        const qty = Number(materialsInfo[i]);
        const material = materialsInfo[i + 1].toLowerCase();

        if (material in keyMaterials) {
            keyMaterials[material] += qty;

            if (keyMaterials[material] >= 250) {
                keyMaterials[material] -= 250

                const legendariesWon = legendaries[material]
                console.log(`${legendariesWon} obtained!`);
                break;

            }
        } else if (material in junkElements) {
            junkElements[material] += qty;
        } else {
            junkElements[material] = qty;
        }
    }


    const keyEntries = Object.entries(keyMaterials);
    const junkEntries = Object.entries(junkElements);

    junkEntries.sort((a, b) => a[0].localeCompare(b[0]));
    keyEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (const [name, qty] of keyEntries) {
        console.log(`${name}: ${qty}`);
    }
    for (const [name, qty] of junkEntries) {
        console.log(`${name}: ${qty}`);

    }

}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');