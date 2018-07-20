// ===============================================================
// Promise basic example
let condition = false;

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
const isMomHappy = true;

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
        .then(showOff)
        .then(fullfilled => console.log(fullfilled))
        .catch(error => console.log(error.message));
};

askMom();

// ===============================================================
// Promise advanced example - indra version
const interviewerLovesYou = true;

const willGetNewJob = new Promise(resolve)