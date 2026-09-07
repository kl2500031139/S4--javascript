// promise example

let promise = new Promise((resolve, reject) => {
    let success = true; // change this to false to see the rejection case
    if (success) {
        resolve("Promise resolved successfully!");
    } else {        
        reject("Promise rejected!");
    }
});
// handing the promise

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

function getVerify(name){
    let promise = new Promise((resolve, reject) => {
        if(name != ""){
            resolve("Name of the person is:" +name );
        } else {
            reject("Name is invalid!");
        }
    });
    return promise;
}

getVerify("prakash")
.then((message) => {
    console.log(message);
}).catch((message) => {
    console.error(message);
});

getVerify("")
.then(message => {
    console.log(message)
})
.catch(message => {
    console.log(message)
})  


function getEven(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("The number is even");
        } else {
            reject("The number is odd");
        }
    });
}

async function checkEvenNumber(num) {
    try {
        const result = await getEven(num);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

checkEvenNumber(14);
checkEvenNumber(25);