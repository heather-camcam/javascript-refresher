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
  return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
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
