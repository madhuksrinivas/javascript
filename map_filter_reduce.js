const user = [
  { firstName: "Charlie", lastName: "Lee", age: 32 },
  { firstName: "Fiona", lastName: "Brown", age: 27 },
  { firstName: "Alice", lastName: "Patel", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 39 },
  { firstName: "Diana", lastName: "Taylor", age: 25 }
]


// map is used to transform an array by applying a callback function to each element. It returns a new array.
const mapop = user.map(u=>{
    return u.firstName+" "+u.lastName;
})
console.log("Return the users full name:")
console.log(mapop);

// filter is used to create a new array containing elements that satisfy a given condition.
const filterop = user.filter(u=>u.age < 30).map(u=>u.firstName)
console.log("Return the users firstname only if age < 30:")
console.log(filterop)

// reduce fun accumulates array elements into a single value based on a callback function.
const reduceop = user.reduce((acc, curr)=>{
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age]  + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log("frequency of the users age:")
console.log(reduceop);



