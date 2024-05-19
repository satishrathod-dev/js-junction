// // let arr = [1,2,3,4];
// // let arr2 = [];

// // let n = arr.length;
// // for(let i=n-1; i>=0; i--){
// //     arr2.push(arr[i]);

// // }
// // arr = arr2;
// // console.log(arr);

// let obj{
//     a : 10,
    
// }

// let obj = {
//     1: "applle",
//     a: 10,
//     b: 20,
//     c: 30,
//     "hello World": "I am in the world",
//     // x: 10000
// }

// let x = "a"
// console.log(obj.x) 
// dot symtax cannot process variables

// console.log(obj."hello world")
// dot syntax that has limitations: 
// dot syntax will only work with key which are valid identifiers

// console.log(obj.1)

// console.log(obj)

// let obj = {
//     1: "applle",
//     a: 10,
//     b: 20,
//     c: 30,
//     true: "I am true",
//     "hello World": "I am in the world",
//     // x: 10000
// }


// [] => square bracket syntax (universal syntax)

// console.log(obj["1"])
// console.log(obj[1])
// let t = "a" 
// console.log(obj[t])

// console.log(obj[true]) 


let obj = {
    name: "Rohan Das",
    age: 89,
    city: "Kolkata",
} 


for(let t in obj){
    console.log(t, obj[t])
}

