"use strict";

//Listeners and Logic
var addButton = document.getElementById("add");
addButton.addEventListener("click", function() {
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	var myAddition = returnValue(parseInt(number1), parseInt(number2), addNumbers);
	dumpToHtml(myAddition);
});

var subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", function() {
	var number1 = document.getElementById("number1").value;		//this is redundant and ugly!!!
	var number2 = document.getElementById("number2").value;
	var mySubtraction = returnValue(parseInt(number1), parseInt(number2), subtractNumbers);
	dumpToHtml(mySubtraction);
});

var multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", function() {
	var number1 = document.getElementById("number1").value;		//this is redundant and ugly!!!
	var number2 = document.getElementById("number2").value;
	var myMultiplication = returnValue(parseInt(number1), parseInt(number2), multiplyNumbers);
	dumpToHtml(myMultiplication);
});

var divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function() {
	var number1 = document.getElementById("number1").value;		//this is redundant and ugly!!!
	var number2 = document.getElementById("number2").value;
	var myDivision = returnValue(parseInt(number1), parseInt(number2), divideNumbers);
	dumpToHtml(myDivision);
});

//the Heavy lifters (functions)
function dumpToHtml(code){
	var output = document.getElementById("showMe");
	output.innerHTML = `<h2>${code}</h2>`;
};	
	
function addNumbers(one, two){
	return one + two;
};

function subtractNumbers(one, two){
	return one - two;
};

function multiplyNumbers(one, two){
	return one * two;
};

function divideNumbers(one, two){
	return one / two;
};

 function returnValue(first, second, myFunction){
 	var doTheWork = myFunction(first, second);
 	return doTheWork;
 };