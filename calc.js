var addition = require("./addition.js");
var subtract = require("./subtract.js");
var multiply = require("./multiply.js");
var divide = require("./divide.js");

var params = process.argv.slice(3);
var result;

switch(process.argv[2]) {
  case "add":
  case "plus":
    result = addition.addition(params);
    break;

  case "sub":
  case "minus":
  case "subtract":
    result = subtract.subtract(params);
    break;

  case "multiply":
  case "times":
  case "x":
    result = multiply.mul(params);
    break;

  case "divide":
  case "div":
  case "/":
    result = divide.div(params);
    break;

  default:
    console.log(result);

}
console.log(result);