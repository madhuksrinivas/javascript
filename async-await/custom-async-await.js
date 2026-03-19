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

// for comparision with promise pls check 'promises/custom-promise.js'
// with async-await, code looks cleamer and simpler.

async function processOrder() {
  try {
    const stockMsg = await checkStockIsPresent(true);
    console.log(stockMsg);
    console.log("placing order...");
    const orderMsg = await placeOrder(true);
    console.log(orderMsg);
  } catch (err) {
    console.log(err);
  }
}

processOrder();
