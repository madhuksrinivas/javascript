// localStorage.clear();

localStorage.setItem("fname","madhu");
localStorage.setItem("lname","kumar");
console.log(localStorage.getItem("fname"));
console.log(localStorage.getItem("lname"));

setTimeout(()=>localStorage.removeItem("lname"),2000);
setTimeout(()=>localStorage.removeItem("fname"),4000);

let obj = {
    fname: "Madhu",
    lname: "Kumar"
}
// localStorage.setItem("name",JSON.stringify(obj));

console.log(JSON.parse(localStorage.getItem("name")));

// setTimeout(()=>localStorage.clear(),6000)

sessionStorage.setItem("name","session storage");