// let arr = [10,20,30,40,50,60,70];
// console.log(arr);

// add an element at index 3 => 35

// let x = 3;

// for(let i=arr.length-1; i>=x; i--){
//     arr[i+1] = arr[i];
//     console.log(arr);
// }

// arr[x] = 35;

// console.log(arr, arr.length);

// arr = [100,200,300];

// console.log(arr);
// let arr = [1,2,3,4,5];
// let arr = [11,1,4,6,3]
let arr = []

let big = -Infinity;
let secondBig = -Infinity;

for (let v of arr) {
    if (v > big) {
        secondBig = big;
        big = v;
        // console.log(big,secondBig);
    }
    else if(v>secondBig && v<big){
        secondBig = v;
        // console.log(secondBig)
    }
}
console.log(secondBig);
// return secondBig;