var myName = "Thibault";
//console.log(myName);

var myLastName = "Gribaumont";
var myCity = "Brussels";

//console.log(myName);
//alert(myName + '\n' + myLastName + '\n' + myCity);

var person = prompt("Please enter your name");
alert("Hello " + person);

//var yourName = prompt("Please enter your first name");
//var yourLastName = prompt("Please enter your last name");
//var yourCity = prompt("Please enter your city");
//
//console.log(yourName + ' ' + yourLastName + ' ' + yourCity);
//alert(yourName + ' ' + yourLastName + ' ' + yourCity);

function getInputValues(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    alert('Last name ' + a + '\nFirst name ' + b + '\nCity ' + c);
};

//console.log(document.getElementById('lastName').value);
//console.log(document.getElementById('firstName').value);
//console.log(document.getElementById('city').value);

//var firstNbr = prompt("Please enter a decimal");
//var secondNbr = prompt("Please enter another decimal");

//console.log(Math.floor(firstNbr));
//console.log(secondNbr);
//alert(Math.floor(firstNbr) * secondNbr);

// Exercice 5
function mathResult(){
    var first = document.getElementById('firstNbr').value;
    var second = document.getElementById('secondNbr').value;
    alert(Math.floor(first) * second);
};

// Exercice 6
function mathModulo(){
    var first = document.getElementById('firstNbr').value;
    var second = document.getElementById('secondNbr').value;
    document.getElementById("test").innerHTML="<span>" + Math.floor(first) * second + "</span>";
};

function displayText(){
    var first = document.getElementById('firstNbr').value;
    var second = document.getElementById('secondNbr').value;
//    var test = document.createElement("<span>result = " + first * second + "</span>");
//    alert("test");
    var paragraph = document.getElementById("test");
    var modulo = first % second;
//    paragraph.innerHTML = "Hello <span>World</span>";
//    paragraph.innerHTML = "<span>result = " + first * second + "</span>";
    paragraph.innerHTML = "<span>result = " + modulo + "</span>";
//    var test = document.createElement("<span>result</span>");
//    document.getElementById('test').appendChild(test);
};

// Exercice 7
function operations(a,b){
    alert(a,b);
    var resultat = a*2;
    resultat *=50;
    resultat -=b;
    resultat +=1766;
    alert(resultat);
};

// Exercice 8
function testAge(){
//    alert("t");
    var test = document.getElementById('age').value;
    alert(test);
    if(test >= 18) {
        alert("majeur");
    }else {
        alert("mineur");
    }
};


// Second series

// Ex 01
function rectangleArea(){
    var rectangleWidth = prompt("Please enter a width");
    var rectangleLength = prompt("Please enter a length");
    
    var paragraph = document.getElementById("test");
    var result = rectangleWidth * rectangleLength;
    paragraph.innerHTML = "<span>Area = " + result + "</span><br/>";
}

//function calculateArea(){
//    
//}

function rectanglePerimeter(){
    var rectangleWidth = prompt("Please enter a width");
    var rectangleLength = prompt("Please enter a length");
    
    var paragraph = document.getElementById("test");
    var result = rectangleWidth * 2 + rectangleLength * 2;
    paragraph.innerHTML = "<span>Perimeter = " + result + "</span><br/>";
}

//function calculatePerimeter(){
//    
//}
