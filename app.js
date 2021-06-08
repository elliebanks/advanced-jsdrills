//functions practice
setName();
function setName () {
    var name = 'Ellie';
    console.log(name);
}

console.log('find average');
let avg = findAvg(10, 6);
console.log('find average', avg);
function findAvg(a, b) {
    console.log('find average');
    var answer = (a + b) / 2;
    return answer;

};

//scoping practice

let fruits = ['banana', 'peach', 'strawberry']

function showFruits() {
    let favFruit = fruits[1];
    console.log(fruits[0]);
    showFavFruit();
    
    function showFavFruit () {
        let leastFav = 'kiwi';
        console.log(favFruit);
        console.log(leastFav); //must be within this function, otherwise it won't know the value of leastFav
    }
}
showFruits();
//showFavFruit();

//new function
sayHello();
function sayHello() {
    console.log('Hello Ellie');
}

//new function expression
let myName = function() {
    alert('My name is Ellie');
}
myName(); //must be placed after the function expression in order to run