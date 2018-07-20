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

inputIsNumber().then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err));
inputIsNumber(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err));

