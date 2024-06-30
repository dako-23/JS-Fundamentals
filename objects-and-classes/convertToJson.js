function convertToJson(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor,
    }

    const jsonObj = JSON.stringify(obj)
    console.log(jsonObj);




}
convertToJson('George', 'Jones', 'Brown');
