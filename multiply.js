exports.mul = function() {

  var parameters = arguments[0];
  var sum = parameters[0];
  for(var i = 1; i < parameters.length; i++){
    sum = sum * parseFloat(parameters[i]);
  }
  
  return sum;  
}
exports.mulBonus = function(x, y) {
  return (parseFloat(x) * parseFloat(y));
}