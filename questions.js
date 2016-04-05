var selectElementsStartingWithA = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf('a') == 0)
    results.push(array[i]);
  }
  return results
}

var selectElementsStartingWithVowel = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if(/^[aeiou]/.test(array[i])){
      results.push(array[i]);
    }
  }
  return results
}

var removeNullElements = function(array) {
  for (var i = 0; i < array.length; i++){
    if(array[i] === null){
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

var removeNullAndFalseElements = function(array) {
  for (var i = 0; i < array.length; i++){
    if((array[i] === null) || (array[i] === false)) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

var reverseWordsInArray = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i].split("").reverse().join(""));
  }
  return result;
}

var everyPossiblePair = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++){
    for (var j = i + 1; j < array.length; j++){
      if(array[i] < array[j]) {
        result.push(new Array(array[i], array[j]));
      } else {
        result.push(new Array(array[j], array[i]));
      }
    }
  }
  result.sort();
  return result;
}

var allElementsExceptFirstThree = function(array) {
  array.splice(0, 3);
  return array;
}

var addElementToBeginning = function(array, element) {
  array.unshift(element)
  return array;
}

var sortByLastLetter = function(array) {
  var result = [];
  var result2 = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i].split("").reverse().join(""));
  }
  result.sort()
  for (var i = 0; i < array.length; i++) {
    result2.push(result[i].split("").reverse().join(""));
  }
  return result2;
}

var getFirstHalf = function(string) {
  var middle = Math.ceil((string.length) / 2)
  var result = string.substr(0, middle)
  return result
}

var makeNegative = function(number) {
  var result = null
  if (number < 0) {
    return number
  } else {
    result = (number - (number * 2))
    return result
  }
}

var numberOfPalindromes = function(array) {
  var count = null
  for (var i = 0; i < array.length; i++) {
    if(array[i] === (array[i].split('').reverse().join(''))) {
      count ++
    }
  }
  return count
}

var shortestWord = function(array) {
  array.sort(function(a, b) {
    return a.length - b.length;
    });
  return array[0];
}

var longestWord = function(array) {
  var lgth = 0;
  var longest;

  for(var i=0; i < array.length; i++){
      if(array[i].length > lgth){
          var lgth = array[i].length;
          longest = array[i];
      }
  }
  return longest
}

var sumNumbers = function(array) {
  var sum = array.reduce(
    function(a, b) {
      return a + b;
    });
  return sum;
}

var repeatElements = function(array) {
  var array2 = array
  var result = array.concat(array2);
  return result
}

var stringToNumber = function(string) {
  var result = parseInt(string);
  return result;
}

var calculateAverage = function(array) {
  var sum = array.reduce(
    function(a, b) {
      return (a + b);
    });
  var average = sum / array.length
  return average;
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
