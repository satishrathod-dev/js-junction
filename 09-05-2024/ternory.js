// lets take a number and check if it is positive, negative or zero

let n = 0;
// let ans = n>0 ? "Positive" : (n < 0 ? "Negative" : "Zero");
// console.log(ans);

let a = 10;
let b = 10;
let c = 10;

let ans = a>b && a>c ? a : (b>c ? b : a==b&&b==c ? "All are equal" : c);
console.log(ans);


// let ans =  
