const numberOrNot = (input) => {
    if (typeof input === "number") {
        return Promise.resolve("input is a number")
    } else {
        return Promise.reject(Error("input is not a number"))
    }
}

numberOrNot("2").then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(3).then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(true).then(Response => console.log(Response)).catch(Error => console.log(Error));