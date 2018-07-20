const numberOrNot = (input) => {
    return new Promise((resolve, reject) => {
        if (typeof input === "number") {
            resolve ("input is a number")
        }else{
            reject(Error("input is not a number"));
        }
    })
}

numberOrNot("2").then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(true).then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(3).then(Response => console.log(Response)).catch(Error => console.log(Error));