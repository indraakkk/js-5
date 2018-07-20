// async function beforePromise() {
//     return "Before Promise"
// }

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

// async function afterPromise() {
//     let promise = new Promise((resolve) => {
//         setTimeout(() => resolve("After Promise"), 1)
//     });
//     let result = await promise
//     console.log(result)
// };

// new version
async function thisSync() {
   await console.log("Before Promise");
   await inputIsNumber(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err));
   await console.log("After Promise");
}

thisSync()

// inputIsNumber().then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err));
// beforePromise().then(res => console.log(res));
// inputIsNumber(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err));
// afterPromise()
// console.log("after promise");