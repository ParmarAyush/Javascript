console.log("This Key Word in Javascript");

/*
this keyword rfer to an object. in which object depends in how it invoked

invoked from 
function or variable => globel object(window object)
*/

// document.getElementById("val").addEventListener("change", function(){
//     console.log(this); // use inside event listner its refer to the html element 
//     console.log(this.value);
// })  

const profile = {
    name: "aayush",
    qualification: "Diploma in CSE",
    sum: function () {
        console.log(this.name);
        var add = 2 + 2;
        console.log("Sum Of Two Number is" + add);
        console.log(this);

        function childMethod() {
            var name = "parmar";
            console.log("Child Method Name : " + name);
            console.log(this); // it refer to window object or global object 
        }
        childMethod();
    }
}

profile.sum();

