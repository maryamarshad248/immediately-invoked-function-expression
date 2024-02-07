'use strict';

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

//console.log(isPrivate);

//for arrow function

(() => console.log('this will  also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 45;
}

//console.log(isPrivate);
console.log(notPrivate);
