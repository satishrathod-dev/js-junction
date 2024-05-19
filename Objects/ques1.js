// let obj1 = {name: 'John', age: 30}; 
// let obj2 = {
//             name: 'Alice',
//             city: 'Delhi'
//         };
// let merged = {...obj1, ...obj2};

// console.log(merged.name);

let user = {name: 'John', age: 30};

function updateUser(user) { 
            return {...user, age: 35}; 
        }

console.log(updateUser(user));