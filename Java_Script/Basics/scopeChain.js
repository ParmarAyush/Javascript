var a = "hello guyes";
function first() {
    var b = " How Are You ?";
    second();

    function second() {
        var c = " My Self Parmar Aayush";
        console.log(a + b + c);
    }
   
    thired(); // give error a not find 
}
first();
function thired()
{
    var d = "it will Give error";
    console.log(d+a+b+c);
}

/*
child function find value inside their execution context, 
if value not find then check in it parent function. and not 
find in parent function then find in global window

function three give error because not find "a" if  declare and initialize inside 
then variable a, b, d, found but c cannot found 

*/