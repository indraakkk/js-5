// ===============================================================
// callback example
const logName = (name) => {
    console.log(`My Name Is ${name}`);
}

const insertCostumName = (callback) => {
    var name = "Indra";
    callback(name);
}

insertCostumName(logName);


// ===============================================================
// Promise basic example
let condition = true;

let myFirstPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("fulfilled!")
    } else {
        const reason = new Error("rejected!")
        reject(reason);
    }
})

myFirstPromise
    .then(successMessage => {
        console.log(".then >>> " + successMessage)
    })
    .catch(error => console.log(".catch >>> " + error.message))

// ===============================================================
// Promise advanced example
const isMomHappy = false;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: "Huawei",
            color: "gray"
        };
        resolve(phone);
    } else {
        const reason = new Error("mom is not have money");
        reject(reason);
    }
});

const showOff = (phone) => {
    const message =
        `Hey friend, I have a new high tech ${phone.color} ${phone.brand} phone`;
    return Promise.resolve(message);
};

const askMom = () => {
    willGetNewPhone
        .then(showOff).then(fullfilled => console.log(fullfilled))
        .catch(error => console.log(error.message));
};

askMom();

// ===============================================================
// Promise advanced example - indra version

const interviewerLovesYou = true;

const willGetNewJob = new Promise((resolve, reject) => {
    if (interviewerLovesYou) {
        const jobs = {
            posistion: "Software Engineer",
            level: "Senior"
        };
        resolve(jobs);
    } else {
        const reason = new Error(
            "you are not suitable working at our company");
        reject(reason);
    }
});

const acceptance = (jobs) => {
    const message =
        `Dear Mr. Indra,
        We glad to see you to join our team as ${jobs.level} ${jobs.posistion}`;
    return Promise.resolve(message);
};

const followUp = () => {
    willGetNewJob
        .then(acceptance).then(youhire => console.log(youhire))
        .catch(error => console.log(error.message));
};

followUp();

// ===============================================================
// Async/await
async function myAsyncFunction() {
    return "The Value";
}

myAsyncFunction().then(returnedVal => console.log(returnedVal));

// ===============================================================
/*
async function waiting() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Times Up!"), 1000)
    });
    let result = await promise;
    alert(result);
}
waiting();
*/
// ===============================================================
const numberOrNot = (input) => {
    return new Promise((resolve, reject)=>{
        if(typeof input === "number"){
            resolve("input is a number")
        } else {
            reject (Error("input is not number"))
        }
    })
}

numberOrNot(2).then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(3).then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(50).then(Response => console.log(Response)).catch(Error => console.log(Error));
