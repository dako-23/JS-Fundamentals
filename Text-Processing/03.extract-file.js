function solve(str) {

    const strArr = str.split("\\")
    const lastIdx = strArr.pop();

    const lastDotIdx = lastIdx.lastIndexOf('.');
    
    const name = lastIdx.substring(0, lastDotIdx);
    const extension = lastIdx.substring(lastDotIdx + 1);

    // for (const el of lastArr) {
    //     const name = el.shift()
    //     const extension = el.shift()
    //     console.log(name);


    // }






    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);








}
solve('C:\\Internal\\training-internal\\Template.pptx');