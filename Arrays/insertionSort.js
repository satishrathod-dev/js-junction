// let arr = [10, 3, 2, 25, 0];

// for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//         if(arr[j] < arr[i]){
//            i = j;
//         }
// // console.log(arr);

//     }
// // console.log(arr);

// }

// console.log(arr);

let arr = [10, 1, 12, 3, 0];

for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = key;
}

console.log(arr);