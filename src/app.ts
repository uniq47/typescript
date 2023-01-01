//generic class

class Queue<T>{
    //this is a simple js class, has data property  and constils array and two methods push and pop methods
    data: Array<T> = [];
// what is data type of item()num, string or biject to use push method, 
//we have empty array so we wnat to push elements, so we need to push only num or string or biject, can we accept any other element, 
//shou push especific type?? so we pishing num and string from push and pop methods, to fix thos we need to accept any data type from push and pop 
//we need to define a general type so we have  typescript generic
//when we werite <T> we created a generic variable T, so we can use T in our class. The array type will be 
//depending on the type of T so the array type will be depending on the type we diefined on the  Queue<T> so data = [] will be data : Array<T>
// if passed num, if passed string it will be num ofstring but what can we accpet here, can we push string and num in the same array, no we can't
// becasue so if its only string it should pass string on the item, as push (item T)  
    push(item: T){
        this.data.push(item);
    }
    //fucntion so wened to trurn typoe T or it wull defined the type undefined

    pop(): T | undefined{      
        return this.data.shift();
    }   

}
// while creating a object weneed to pass a type, so we can pass num or     string or biject or 
//else it will accept any type , queue<string>,
// inside the class Queue<string> we pass string so the T is replaced by string
// we can;t pass num or biject or else it will give error
//const firstObj: Queue<string>= new Queue();
// or we can write like this 
const firstObj = new Queue<string>();
firstObj.push("string");
console.log(firstObj);



const secondObj: Queue<number> = new Queue();
secondObj.push(30);
console.log(secondObj);
// //this is a generic class, we can use any type of data in this class and that is data type is number as default so we can use number type in this class
// new Array<number>(1,2,3);

// //const arr: number[] = [1,2,3];
// //or we cna write
// const arr: Array<number> = [1,2,3];
//arr.push("string"); //error we can't push string in this array

