


// primitive  types
const isAvailable: boolean = true;
//let isAvailableLet = 20;

let age =30;
let hello = "Hello";

let notDefined;
let notPresent: number | null = null;
notPresent = 30;

console.log(Symbol("unique") === Symbol("unique"));

//let bigNUmber = BigInt(10);
//console.log(bigNUmber);

//let bigNUmber = 20n; 

//bulding constructor finction in js
let set = new Set<string>(["hello"]);
console.log(set);


//let arr=[1,2,3,4];
//let arr = new Array<number>(1,2,3,4);
let arr: number[] = new Array(1,2,3,4);
//there two are the same
let regexp = new RegExp('hello');

//const passCheck = /hello/

const passCheck = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

const myPassword = "Kathmandu1";

if(myPassword.match(passCheck)){
    console.log("Password is strong");
}
else{
    console.log("Password is weak");
}

 const map = new Map<string, number>()
//git add -A && git commit -m "message" && git push all at once 
//git config --global alias.cmp '!f() { git add -A && git commit -m "$@" && git push; }; f'
//git cmp " message";

class Queue<T>{
    data: Array<T> = [];

    push(item: T){
        this.data.push(item);
    }

    pop(): T | undefined{
        return this.data.shift();
    }
}

const firstObj = new Queue();

firstObj.push(1);
firstObj.push("2");

console.log(firstObj);
