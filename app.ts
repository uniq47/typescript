//type annotation
let movieTitle: string = "Name"; // here we are doing it ourself its called type annotation
//Type inferance
movieTitle= "3 idiots";



//any

let anything: any = "Nepal";

//anything = "Nepal";
anything = true;
anything = 1;

//array
//let ages: (number | string) [];
//ages=[1,2,3,4, 'hello']

//2d array
let ages:(number| string )[][];
ages=[[1,2],["yo", "hello"]]

//add the value in array using push 
const number=[1,2,3];
number.push(4);


//fucntion in typescr

function display(a:number,b:number)
{
    console.log(a);
    console.log(b);
}
display(1,2);

//function with return type
function add(a:number, b:number): number
{
    return a+b;
}

const result = add(1,2);
console.log(result);


//function with no return type
function print(value:number): void 
{

    console.log(value);
}
print(10);



