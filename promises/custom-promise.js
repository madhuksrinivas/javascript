// A custom Promise is useful when you want to wrap your own async logic (like timers, conditions, or API calls).

// resolve() is called when the task succeeds.
// reject() is called when the task fails.
// You can consume it with .then()/.catch() or async/await.

function checkStockIsPresent(inStock) {
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            inStock ? resolve("Stock is Present") : reject("Stock is not present");
        }, 1000)
    })
}

function placeOrder(okayToPlaceOrder) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            okayToPlaceOrder ? resolve("Placed order.") : reject("Failed to place order.");
        },1000)
    })
}

const IN_STOCK = true;

checkStockIsPresent(IN_STOCK)
.then(res=> {
    console.log(res);
    return true;
})
.then(ifStockPresent=>{
    console.log("placing order...")
    return placeOrder(ifStockPresent)
})
.then(res=>console.log(res))
.catch(err=>console.log(err));

// Each step returns a Promise and next then will catch it
// if a .then() is returning a promise, 
// then we have to return it to next .then() to consume it for logging or processing
// Errors are handled in one place with .catch().
// if any .then() fails, then catch block is executed.
// .catch is scoped to prev .then()'s even if chain .then after .catch, next .then will work followed by next .catch
// The chain is flat and readable.