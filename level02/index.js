const checkVariableType = (input) => {

    switch (typeof input) {
        case "string":
            return Promise.resolve("input is a string")
        case "number":
            return Promise.resolve("input is a number")
        case "boolean":
            return Promise.resolve("input is a boolean")
        case "object":
            return Promise.resolve("input is an object")
            // break;
        case "undefined":
            return Promise.reject(Error("input is an undefined"));
    }
}

checkVariableType(666).then(res => console.log(res)).catch(err => console.log(err))
checkVariableType(false).then(res => console.log(res)).catch(err => console.log(err));
checkVariableType("six six six").then(res => console.log(res)).catch(err => console.log(err));
checkVariableType([]).then(res => console.log(res)).catch(err => console.log(err));
checkVariableType().then(res => console.log(res)).catch(err => console.log(err));