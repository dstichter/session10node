var cmdArguments = process.argv;

result = parseFloat(cmdArguments[2]);

for(var i = 3; i < cmdArguments.length; i++) {
  result -= cmdArguments[i];
}

console.log(result);