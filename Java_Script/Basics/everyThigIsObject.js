/*
ther are tow types of data types 
    1.primitive data types 
        - number 
        - boolean
        - string 
        - null
        - undefined
        - symbol
    2.non-primitive data types
        -object
         - array
         - constructor


*/

let a; // undefined 
let b = null;
console.log("\nType Of NULL Variable B : " + typeof(b));// its give object rather than NULL Because its set by default 

const obj = {
    name:"Aayush",
    Age:"19"
}
obj.gender = "Male"
console.log("\ncheck Type of Object : " + typeof(obj));

function ayush()
{
    console.log("\nAayush from method");
}
ayush();
ayush.insertfromoutside = "Yes Insert Successfully";// prove that method work as object 
console.log(ayush.insertfromoutside);
console.log("Check Function Type :" + typeof( function(){} ));

// now if want to check data type of array its shows object. use isArray method of Array constructor

const array = [1,2,3];
console.log("\nType Of Array Form TypeOF: " + typeof(array));
console.log("Type Of Array Form isArray: " + Array.isArray(array));
