let arr = [10, 1, 12, 3, 0];

for(let i=0; i<arr.length; i++){
    let currMin = i;
    for(let j=i; j<arr.length; j++){
        if(arr[j] < arr[currMin]){
            currMin = j;
        }
    }
    // let temp = arr[i];
    // arr[i] = arr[currMin];
    // arr[currMin] = temp;
    if(currMin != arr[i]){
        [arr[i], arr[currMin]] = [arr[currMin], arr[i]]
    }
}
console.log(arr);