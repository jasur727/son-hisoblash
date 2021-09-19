var numberArray = [65,7,4,3,6,3,78];

function number(num){
  var resultArray = 0;

  for(var number of num){
    resultArray += number
  }
  return resultArray;
}

console.log(number(numberArray));
var words = 'Lorem ipsum dolor amet consectetur adipisicing elit'.split(' ');

var isText = words;

for(var w of words){
  if(isText < w){
    isText = w
  }
}

console.log(isText);
