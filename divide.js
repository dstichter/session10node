exports.div = function() {
  var result = 0;
  var parameters = arguments[0];

  var result = parseFloat(parameters[0]);

  for(var i = 1; i < parameters.length; i++) {
    result = result / parameters[i];
  }

  return result;  
}
exports.divBonus = function(x, y) {
  return (parseFloat(x) / parseFloat(y));
}