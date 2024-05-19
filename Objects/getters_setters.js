class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        if (newAge > 0 && newAge < 150) {
            this._age = newAge;
        } else {
            console.log("Invalid age");
        }
    }
}

let user1 = new User("Alice", 30);
console.log(user1.name); // Output: Alice
console.log(user1.age); // Output: 30

user1.name = "Bob";
console.log(user1.name); // Output: Bob

user1.age = 200; // Output: Invalid age
console.log(user1.age); // Output: 30 (age is unchanged)
