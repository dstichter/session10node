var addition = require("./addition.js");
var subtract = require("./subtract.js");
var multiply = require("./multiply.js");
var divide = require("./divide.js");

var params = process.argv.slice(2);
var result;
var hold;
var check = 0;
for(var i = 0; i < params.length; i++) {
  switch(params[i]) {
      case "+":
        if(check === 0){
          result = addition.additionBonus(params[i - 1], params[i + 1]);
          check = 1;
        }
        else{
          result = addition.additionBonus(result, params[i + 1]);
        }
        break;

      case "-":
        if(check === 0){
          result = subtract.subtractBonus(params[i - 1], params[i + 1]);
          check = 1;
        }
        else{
          result = subtract.subtractBonus(result, params[i + 1]);
        }
        break;

      case "x":
        if(check === 0){
          result = multiply.mulBonus(params[i - 1], params[i + 1]);
          check = 1;
        }
        else{
          result = multiply.mulBonus(result, params[i + 1]);
        }
        break;

      case "/":
        if(check === 0){
          result = divide.divBonus(params[i - 1], params[i + 1]);
          check = 1;
        }
        else{
          result = divide.divBonus(result, params[i + 1]);
        }
        break;
    }
}
console.log(result)
