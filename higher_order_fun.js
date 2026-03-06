// HOF is a Higher Order Function which either takes function(callback fun) as an argument or returns a new function
// eg: map, filter, reduce usecases

const radii = [3, 1, 2, 4];

const areaOfCircle = r => Math.PI * r * r;
const circumferenceOfCircle = r => 2 * Math.PI * r;
const diameterOfCircle = r => 2 * r;

// HOF - exactly the implementation of map
const calculate = (radii, logic) => {
    let op = [];
    radii.forEach((r)=>{
        const v = logic(r);
        op.push(v);
    })
    return op;
}

// console.log(calculate(radii, areaOfCircle));
// console.log(calculate(radii, circumferenceOfCircle));
// console.log(calculate(radii, diameterOfCircle));

// console.log(radii.map(areaOfCircle));

// our own map function - generally a pollyfill for the map
Array.prototype.cal = function(logic) {
    let op = [];
    this.forEach((r)=>{
        const v = logic(r);
        op.push(v);
    })
    return op;
}

// console.log(radii.cal(areaOfCircle));

// A polyfill is a piece of code (usually JavaScript) that provides modern functionality on older environments that do not natively support it.