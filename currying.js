// Definition: Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.
// Benefit: Makes functions reusable, composable, and easier to chain.
// Currying breaks down multi-arg-fun into single-arg-fun

// ---using bind---

const multiply = (x, y) => x * y;
const multiplyBy2 = multiply.bind(this, 2)
console.log(multiplyBy2(3)); // 6
console.log(multiplyBy2(4)); // 8

const add = (a, b, c) => a + b + c;
const add1 = add.bind(null, 1);     // fix a = 1
const add1And2 = add1.bind(null, 2); // fix b = 2
console.log(add1And2(3)); // 6
console.log(add1And2(10)); // 13

//---using closure---

const mul = (x=1) => (y=1) => x*y;
console.log(mul(2)(3)); // 6
// or
const mulBy2 = mul(2);
console.log(mulBy2(5)); // 10

function sum (x=0) {
    return function(y=0){
        return function(z=0){
            return x+y+z;
        }
    }
}
console.log(sum(1)(2)(3)); // 6
console.log(sum()()()); // 0




// Real time usecases

// 1. API Calls - Currying can simplify building URLs or request options:
// You “lock in” the base URL once, then reuse it for different endpoints.
// function apiCall(baseUrl) {
//   return function(endpoint) {
//     return function(params) {
//       return fetch(`${baseUrl}/${endpoint}/${params}`);
//     };
//   };
// }
// const githubApi = apiCall("https://api.github.com"); 
// const userApi = githubApi("users");
// userApi("madhuksrinivas")  // fetches https://api.github.com/users/madhuksrinivas
//   .then(res => {
//     if (!res.ok) throw new Error("Network response was not ok");
//     return res.json();
//   })
//   .then(data => {
//     console.log("Github data:",data)
//   })
//   .catch(err => console.error("Fetch error:", err));


// 2. Data Transformation Pipelines - Currying works beautifully with HOF like map or filter:
const greaterThan = x => y => y > x;
const numbers = [1, 5, 10, 15];
const result = numbers.filter(greaterThan(7));
console.log(result); // [10, 15]
// Here, greaterThan(7) returns a function that checks if a number is greater than 7, perfect for filter.


// Currying with Async Functions:
// Currying shines when combined with Promises or async/await, which are modern alternatives to callbacks.

// Example: Currying + Promises
const fetchData = url => fetch(url).then(res => res.json());

const processData = data => result => {
  console.log("Processed:", result);
};

fetchData("https://api.example.com")
  .then(processData("some input"));

// Example: Currying + Async/Await
const curryFetch = url => async parser => {
  const res = await fetch(url);
  const data = await res.json();
  return parser(data);
};

const parseUser = data => data.user;

(async () => {
  const user = await curryFetch("https://api.example.com")(parseUser);
  console.log(user);
})();

