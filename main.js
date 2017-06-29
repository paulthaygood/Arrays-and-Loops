// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

sports = ['soccer', 'baseball'];
total = 4;


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array

var strings = ['this','is','a','collection','of','words'];

  function longestString(arrayOfStrings) {

    console.log(arrayOfStrings);

    var longestWord = "";

    for (var i = 0; i < arrayOfStrings.length; i++) {

      console.log(arrayOfStrings[i], longestWord);

      if(arrayOfStrings[i].length > longestWord.length){
        longestWord = arrayOfStrings[i];
      }

    }

    return longestWord;
  }


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];



// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
//
var smallestNumber = function(arrayOfNumbers){
  console.log(arrayOfNumbers);

  var leastNumber = Infinity;

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i], leastNumber);

    if(arrayOfNumbers[i] < leastNumber){
      leastNumber = arrayOfNumbers[i];
    }

  }

  return leastNumber
}

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.

//var numbers = [1,12,4,18,9,7,11,3,101,5,6];

// A:

function getEvens(arrNum){
  console.log(arrNum);

  var evenNumbers = [];

  for (var i = 0; i < arrNum.length; i++) {

    if (arrNum[i] % 2 === 0) {
      evenNumbers.push(arrNum[i])

  }

  return evenNumbers

}


console.assert(getEvens(numbers).toString()) === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument-
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

var strings = ['1','12','4','18','9','7','11','3','101','5','6'];

function reverseArray(arrayToReverse){

  var reversedAray = [];

  for (var i = 11; i < arrayToReverse.length - 1; i--) {
    arrayToReverse[i]
  }

  return reversedArray;
}



// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
var sumArrayOfNumbers = function(amount){

  var newAmount = 0;

  for (var i = 0; i < amount.length; i++) {
    newAmount= newAmount + amount[i];
    //console.log(newAmount)
  }
  return newAmount;
}


arrayFunction(numbers);
console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
  var numbersOver10 = function(amount){
    var over10 = [];

    for (var i = 0; i < amount.length; i++) {
      if(amount[i] > 10){
   over10.push(amount[i]);
  }
}
//console.log(over10);
return over10;
}

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
A:
var numbersOverX = function(array, amount){
var greaterNum = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > amount){
        greaterNum.push(array[i]);
    }
  }
  return greaterNum;
}


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];

var joinArrays  = function([amount1, amount2]){
  var bothArrays = amount1;
  for (var i = 0; i < amount2.length; i++) {
    bothArrays.push(amount2[i]);
  }
  //console.log(bothArrays);
  return bothArrays;
}


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = <your answer>
// ['Will', 'JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = <your answer>
// ['Dan', 'JavaScript'] ['JD', 'JavaScript']

var instructorTwo = instructors[0][1];
// instructorTwo = <your answer>
// ['JD', 'Javascript'] ['Tim', 'Javascript']

var instructorThree = instructors[2][0];
// instructorThree = <your answer>
// ['Brit', 'Ruby'] ['JD', 'Javascript']
