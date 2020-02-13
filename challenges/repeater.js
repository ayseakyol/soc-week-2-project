console.log('repeater script has loaded');

// write this function!
function repeater(string, usrNm) {
  if (usrNm > 0) {
    result = (string + '\n').repeat(usrNm);
  }
  else {
    result = "";

  }
  return result;
}


console.assert(repeater('horse', 2) === 'horse\nhorse\n', 'first');
console.assert(repeater('walk fast', 3) === 'walk fast\nwalk fast\nwalk fast\n', 'second');
console.assert(repeater('-.-.-', 1) === '-.-.-\n', 'third');
console.assert(repeater('milk', 0) === '', 'fourth');
console.assert(repeater('', 4) === '\n\n\n\n', 'fifth');


function repeaterHandler() {
  // prompt the user for a noun, verb and adjective
  const userPhrase = prompt('enter a phrase');
  const userNumStr = prompt('enter a num');
  // cast userNumStr to a Number, and assign the value to userNum
  const userNum = Number(userNumStr);

  console.assert(typeof userNum === 'number', "don't forget to cast userNumStr to a number!");

  // perform core logic
  const res = repeater(userPhrase, userNum);

  // alert result for the user
  alert(res);

  // log action for the developer
  console.log('\n--- repeater ---');
  console.log('userPhrase:', '(' + typeof userPhrase + '),', userPhrase);
  console.log('userNum:', '(' + typeof userNum + '),', userNum);
}

document.getElementById('repeater-button').addEventListener('click', repeaterHandler);
