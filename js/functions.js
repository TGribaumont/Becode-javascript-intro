//var myName = "Thibault";
//console.log(myName);

//var myLastName = "Gribaumont";
//var myCity = "Brussels";

//console.log(myName);
//alert(myName + '\n' + myLastName + '\n' + myCity);

//var person = prompt("Please enter your name");
//alert("Hello " + person);

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
//    alert(test);
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

// Ex 02
function circleArea(){
    var radius = prompt("Please enter a radius");
    var area = Math.PI * Math.pow(radius,2);
//    return area;
    var paragraph = document.getElementById("test");
    paragraph.innerHTML = "<span>Circle area = " + area + "</span><br/>";
}

// Ex 03
//var a = 3;
//var b = 2;

function multiplyBy3(x){
    var result = x * 3;
    return result;
}

function displayBy3Result(){
    alert(multiplyBy3(a));
    alert(multiplyBy3(b));
}

// Ex 04
var tab = [-2,1,4];
function addTwo(x){
    var result = x + 2;
    return result;
}

function displayAddTwoResult(){
    alert(addTwo(tab[0]));
    alert(addTwo(tab[tab.length - 1]));
}

// Ex 05
var b = 2;
function bunchOfOperations(){
    var paragraph = document.getElementById("test");
    
    a=b++;
    paragraph.innerHTML = "<span>a=b++<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=++b;
    paragraph.innerHTML += "<span>a=++b<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=b--;
    paragraph.innerHTML += "<span>a=b--<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=--b;
    paragraph.innerHTML += "<span>a=--b<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a+=b++;
    paragraph.innerHTML += "<span>a+=b++<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=1; a+=++b;
    paragraph.innerHTML += "<span>a=1; a+=++b<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=1; a-=b++;
    paragraph.innerHTML += "<span>a=1; a-=b++<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=1; a-=++b;
    paragraph.innerHTML += "<span>a=1; a-=++b<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=1; a+=b--;
    paragraph.innerHTML += "<span>a=1; a+=b--<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
    
    b=2;
    a=1; a+=--b;
    paragraph.innerHTML += "<span>a=1; a+=--b<br/> a = " + a + ' b = ' + b + "</span><br/><br/>";
}

// Ex 06
//var tab = [-2,1,4];
function substractTwo(x){
    if(x >= 0){
        var result = x - 2;
    } else {
        var result = "Negative figure";
    }
    return result;
}

function displaySubstractTwoResult(){
    alert(substractTwo(tab[0]));
    alert(substractTwo(tab[tab.length - 1]));
}

// Ex 07
function switchChoice(){
    var choice = prompt("Enter 1, 2 or 3");
    switch(choice){
        case "1": alert("1. Thank you !");
            break;
        case "2": alert("2. Hello !");
            break;
        case "3": alert("3. Goodbye !");
            break;
        default: alert("Wrong number !");
            break;
    }
}

// Ex 08
function switchDayWeek(){
    var today = new Date();
    var day = today.getDay();
    var weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//    alert(weekday[day-1]);
    var paragraph = document.getElementById("test");
    paragraph.innerHTML = "<span>Day of the week = " + weekday[day-1] + "</span><br/>";
}

// Ex 09
function testWhile(){
    var pString = prompt("Please enter a string containing the letter p.");
    while(pString.indexOf("p") < 0){
        pString = prompt("You did not enter a string containing the letter p.");
    }
    var paragraph = document.getElementById("test");
    paragraph.innerHTML = "<span>Your string = " + pString + "</span><br/>";
}

// Ex 10
function forSum(){
    var a = 0;
    var tab = [];
    for(var i = 0, j = 3;i < 3; i++, j--){
        var nbrToAdd = prompt("Please enter a number (" + j + " number(s) left)");
        if(nbrToAdd === null){
            nbrToAdd = 0;
        }
        tab[i]=nbrToAdd;
        a += parseInt(nbrToAdd);
    }
    var paragraph = document.getElementById("test");
    paragraph.innerHTML = "<span>Your numbers are: " + tab[0] + ', ' + tab[1] + ', ' + tab[2] + "</span><br/>";
    paragraph.innerHTML += "<span>The total is = " + a + "</span><br/>";
}

// Ex 11
function calculateAverage(){
    var count = 0;
    var sum = 0;
    var nbrToAdd = prompt("Please enter a integer");
//    var nbrToAdd = Number.
    
    nbrToAdd = parseInt(nbrToAdd);
//    alert(test);
    while(isNaN(nbrToAdd)){
        nbrToAdd = prompt("You did not enter a number");
        nbrToAdd = parseInt(nbrToAdd);
    }
    
    count++;
    sum += nbrToAdd;
    while(nbrToAdd >= 0){
        nbrToAdd = prompt("Please enter another integer");
        while(isNaN(nbrToAdd)){
            nbrToAdd = prompt("You did not enter a number");
            nbrToAdd = parseInt(nbrToAdd);
        }
        nbrToAdd = parseInt(nbrToAdd);
        count++;
        sum += nbrToAdd;
//        alert("count: " + count + ', sum = ' + sum);
    }
    var average = sum / count;
    var paragraph = document.getElementById("test");
    paragraph.innerHTML = "<span>You entered " + count + " numbers</span><br/>";
    paragraph.innerHTML += "<span>The average is = " + average + "</span><br/>";
}

// Ex 12
function temperatureConversion(){
    var choice = prompt("0. Stop\n1. Celsius to Fahrenheit\n2. Celsius to Kelvin\n3. Fahrenheit to Celsius\n4. Fahrenheit to Kelvin\n5. Kelvin to Celsius\n6. Kelvin to Fahrenheit");
    var temperature = prompt("Please enter a temperature to convert");
    temperature = parseInt(temperature);
    var result = 0;
    
    switch(choice){
        case "0": alert("Goodbye !");
            break;
        case "1": result = (temperature * 9/5) + 32;
            break;
        case "2": result = temperature + 273,15;
            break;
        case "3": result = (temperature - 32) / (9/5);
            break;
        case "4": result = (temperature - 32) * (5/9) + 273,15;
            break;
        case "5": result = temperature - 273,15;
            break;
        case "6": result = temperature * 9 / 5 - 459,67;
            break;
    }
    
    var paragraph = document.getElementById("test");
    paragraph.innerHTML = "<span>The result is " + result + " numbers</span><br/>";

}


