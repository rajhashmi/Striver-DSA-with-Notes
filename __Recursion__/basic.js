function call(){
    console.log(1);
    call();
};
// call() // this function will call infinite loop and eventually we'll see the problem of stackoverflow

// let add some condition 
let count = 0;

function call2() {
    count++;
    if (count > 5) {
        return count;
    } else {
        return count;
    }
}

console.log(call2()); // Output will be 1, because count is initially 0 and gets incremented


//  Let's solve some questions on recursion 

// 1. Print Name 5 times 
let counter = 0;
function printName(){
    counter++
    if( counter <= 5){
        console.log("shahid Hashmi");
    }else{
        return "shahid Hashmi";

    }
    printName();
}
console.log(printName());


// 2. Print Linearly from 1 to N.

function PrintNumber(n){
    if (n >= 1) {
        console.log(n);
        PrintNumber(n - 1);
    }
}
console.log(PrintNumber(5));