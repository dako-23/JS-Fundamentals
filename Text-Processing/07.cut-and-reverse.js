function solve(str) {

    const middleIdx = str.length / 2;
    const firstHalf = str.substring(0, middleIdx).split('').reverse().join('');
    const secondHalf = str.substring(middleIdx).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);
    







}
solve('tluciffiDsIsihTgnizamAoSsIsihT');