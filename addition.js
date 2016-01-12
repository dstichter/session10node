exports.addition = function() {
  var sum = 0;
  var parameters = arguments[0];

  for(var i = 0; i < parameters.length; i++){
    sum += parseFloat(parameters[i]);
  }
  
  return sum;  
}
exports.additionBonus = function(x, y) {
  return (parseFloat(x) + parseFloat(y));
}