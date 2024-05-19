// 24 hour format

let hr = 0
let min = 35


if(hr> 12){
    console.log(hr-12 + ":" + min + " PM")
}

else if(hr == 0){
    console.log(12 + ":" + min + " AM")
}

else if(hr <12){
    console.log(hr + ":" + min + " AM")
}

else if(hr == 12){
    console.log(hr + ":" + min + " PM")
}