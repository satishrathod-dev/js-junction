let a = 10;
let b = 20; 
let c = 5;

let choices = a>b && a>c

switch(choices){
    case true: console.log("Biggest number is:", a);
                break;

    case false: 
        let choices1 = b>c;
        switch(choices1){
            case true: console.log("Biggest number is", b);
                       break;
 
            case false: console.log("Biggest Number is",c)
        }
        
}