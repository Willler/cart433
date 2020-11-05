"use strict";
//prepping the script
$(document).ready(jquerySetup);

let checked = 0;

function jquerySetup() {
  $( ".profileCard" ).draggable({ stack: ".profileCard" });
}


window.onload = function() {
  document.getElementById('firstCheck').style.display = 'none';
  document.getElementById('secondCheck').style.display = 'none';
  document.getElementById('thirdCheck').style.display = 'none';
  document.getElementById('fourthCheck').style.display = 'none';
  document.getElementById('fifthCheck').style.display = 'none';
  document.getElementById('sixthCheck').style.display = 'none';
  document.getElementById('seventhCheck').style.display = 'none';
  document.getElementById('eigthCheck').style.display = 'none';
  document.getElementById('ninthCheck').style.display = 'none';
  document.getElementById('tenthCheck').style.display = 'none';
  document.getElementById('bottomHalf').style.display = 'none';
};

function checkFunction() {
  document.getElementById('firstCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer1').style.display = 'none';
}

function checkFunction2() {
  document.getElementById('secondCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer2').style.display = 'none';
}

function checkFunction3() {
  document.getElementById('thirdCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer3').style.display = 'none';
}

function checkFunction4() {
  document.getElementById('fourthCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer4').style.display = 'none';
}

function checkFunction5() {
  document.getElementById('fifthCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer5').style.display = 'none';
}

function checkFunction6() {
  document.getElementById('sixthCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer6').style.display = 'none';
}

function checkFunction7() {
  document.getElementById('seventhCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer7').style.display = 'none';
}

function checkFunction8() {
  document.getElementById('eigthCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer8').style.display = 'none';
}

function checkFunction9() {
  document.getElementById('ninthCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer9').style.display = 'none';
}

function checkFunction10() {
  document.getElementById('tenthCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  bottomHalfDisplay();
  document.getElementById('officer10').style.display = 'none';
}

function bottomHalfDisplay() {
  if (checked == 10) {
    document.getElementById('bottomHalf').style.display = 'flex';
  }
}
