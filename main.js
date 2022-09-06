let text = document.getElementById("demo");

function myFunction(a, b) {
    return a * b
}
text.innerHTML = myFunction(4,5);

let number = document.getElementById("demo1");


let x = secondFunction(5, 7);
number.innerHTML = x;


function secondFunction(a, b){
    return a * b
}

let celci = document.getElementById("demo2");

function Farengeyt(f) {
    return (5/9)  * (f - 32);
}
celci.innerHTML = Farengeyt(77);

let celci1 = document.getElementById("demo3");

function Farengeyt1(fahrenheit) {
    return (5/9) * ( fahrenheit - 32)
}
celci1.innerHTML = "Uzbekistonda harorat" + Farengeyt1(77) + "celcius"

let lokal = document.getElementById("demo4");

function lokalniy(){
    let carName = "Volvo";
    lokal.innerHTML = typeof carName + " " + carName;
}

let lokal1 = document.getElementById("demo5");
typeof carName;

lokalniy()