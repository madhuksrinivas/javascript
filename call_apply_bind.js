let users = [
    {
        firstName: "Madhu",
        lastName: "Kumar",
    },
    {
        firstName: "Flamme",
        lastName: "Mage"
    },
    {
        firstName: "Luffy",
        lastName: "Pirot"
    },

]

let printFullName = function(place, country) {
    console.log(this.firstName+" "+this.lastName+" from "+ place+", "+country)
}

// call(), apply(), and bind() - controls the value of "this" inside functions
// eg. function borrowing
// call & apply invokes the function immediately and sets this to the first argument
// .call(obj, arg1, arg2) → sets this to obj and passes arguments individually.
printFullName.call(users[0], "Hosur", "India");
// .apply(obj, [arg1, arg2]) → sets this to obj and passes arguments as an array.
printFullName.apply(users[1], ["Anime", "Japan"]);


// Borrowing with bind (creates a new function bound to an object) 
const boundFn = printFullName.bind(users[2], "OnePiece1", "Japan"); 
boundFn();
// bind creates a copy of the function and binds to the users[2] object, 
// which returns the function and can be called later


// pollyfill for bind - pollyfill is a piece of code that provides modern functionality to older browsers.
Function.prototype.myBind = function(userObj={}, args1=[]) {
    const fn = this; // this is printFullName
    return function (args2=[]) {
        return fn.apply(userObj,[...args1,...args2]);
    }
}

let printUserName = printFullName.myBind(users[2], ["OnePiece2", "Japan"]);
printUserName();

