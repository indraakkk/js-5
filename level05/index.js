const inputIsNumber = (input) => {
    if (typeof input === "number") {
        return Promise.resolve(input)
    } else {
        return Promise.reject(Error("input is not a number"))
    }
}

const multipleByTwo = (result) => {
    return Promise.resolve(result * 2);
}

const multipleByThree = (result) => {
    return Promise.resolve(result * 3);
}

async function numberSync() 
{
    let result = await inputIsNumber(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => {return res}).catch(err => {return err});
    console.log(result);
}

numberSync()
// let result = numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => {return res}).catch(err => {return err})
// console.log(result)
