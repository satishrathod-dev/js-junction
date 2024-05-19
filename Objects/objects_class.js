// syntax of a class:

let myEmail = "satish@gmail.com";
let myName = "Satish Rathod";
let myAge = 23;

class User {
    constructor(myName, myEmail, myAge) {
        this.name = myName;
        this.email = myEmail;
        this.age = myAge;
    }
}

let user1 = new User(myName, myEmail, myAge);
// let user1 = ("myName", "myEmail", "myAge");

console.log(user1);