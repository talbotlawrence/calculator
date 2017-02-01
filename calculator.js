"use strict";

var addButton = document.getElementById("add");
addButton.addEventListener("click", addNumbers);

var subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", subtractsNumbers);

var multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", multiplyNumbers);

var divideButton = document.getElementById("divide");
divideButton.addEventListener("click", divideNumbers);


(function getUserInput() {			//I really want this to be an IIFE!!!
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	return hey;
})();

function addNumbers(one, two){
	return one + two;
};

function subtractsNumbers(one, two){
	return one - two;
};

function multiplyNumbers(one, two){
	return one * two;
};

function divideNumbers(one, two){
	return one / two;
};

 function returnValue(first, second, myFunction){
 	var doTheWork = myFunction(parseInt(first), parseInt(second));
 	var output = document.getElementById("showMe");
 	return doTheWork;
 };

 var addPlease = returnValue(number1, number2, add);
 output.innerHTML = `<h2>${addPlease}</h2>`;

 var subtractPlease = returnValue(number1, number2, subtract);
 output.innerHTML = `<h2>${subtractPlease}</h2>`;

 var multiplyPlease = returnValue(number1, number2, multiply);
 output.innerHTML = `<h2>${multiplyPlease}</h2>`;

 var dividePlease = returnValue(number1, number2, divide);
 output.innerHTML = `<h2>${dividePlease}</h2>`;