"use strict";
//prepping the script
$(document).ready(jquerySetup);

let checked = 0;

let correctSFX = new Audio("sounds/correct.wav");
let wrongSFX = new Audio("sounds/wrong.wav");
let cityNoise = new Audio("sounds/cityNoise.mp3");
let honkSFX = new Audio("sounds/honking.wav");

function jquerySetup() {
  $( ".profileCard" ).draggable({ stack: ".profileCard" });
}

function startNoise() {
  cityNoise.play();
  cityNoise.loop = true;
  cityNoise.volume = 0.05;
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
};

function checkFunction() {
  honkSFX.play();
  document.getElementById('firstCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  document.getElementById('officer1').style.display = 'none';
  alert('The Propublica database records a total of 12056 complaints for only 3996 recorded officers.');
}

function checkFunction2() {
  honkSFX.play();
  document.getElementById('secondCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  document.getElementById('officer2').style.display = 'none';
  alert('Since 1985, there were 20292 recorded allegations of Abuse of Power against the NYPD.');
}

function checkFunction3() {
honkSFX.play();
  document.getElementById('thirdCheck').style.display = 'flex';
  console.log(checked);
  checked++;
  document.getElementById('officer3').style.display = 'none';
  alert('Since 1985, there were 7636 recorded allegations of excessive and unnecessary Force against the NYPD.');
}

function checkFunction4() {
  honkSFX.play();
  document.getElementById('fourthCheck').style.display = 'flex';
  console.log(checked);
  checked++;

  document.getElementById('officer4').style.display = 'none';
  alert('Since 1985, there were 753 recorded allegations of offensive language relating to race, ethnicity, gender, religion, sexual orientation or disability against the NYPD.');
}

function checkFunction5() {
  honkSFX.play();
  document.getElementById('fifthCheck').style.display = 'flex';
  console.log(checked);
  checked++;

  document.getElementById('officer5').style.display = 'none';
  alert('Since 1985, there were 4677 recorded allegations of Discourtecy against the NYPD.');
}

function checkFunction6() {
  honkSFX.play();
  document.getElementById('sixthCheck').style.display = 'flex';
  console.log(checked);
  checked++;

  document.getElementById('officer6').style.display = 'none';
  alert('The top 10 offenders within the NYPD are rewarded with hefty salaries of more than 150K a year.');
}

function checkFunction7() {
honkSFX.play();
  document.getElementById('seventhCheck').style.display = 'flex';
  console.log(checked);
  checked++;

  document.getElementById('officer7').style.display = 'none';
  alert('Speaking to ProPublica, former CCRB investigator Dan Bodah revealed: “I exonerated tons of cases that involved awful conduct that fell within the guidelines. It’s kind of haunting. The law and policy gives cops a lot of discretion.”')
}

function checkFunction8() {
  honkSFX.play();
  document.getElementById('eigthCheck').style.display = 'flex';
  console.log(checked);
  checked++;

  document.getElementById('officer8').style.display = 'none';
  alert('There is often a clear pattern in allegations. For example, of the 69 allegations made against Sbarra where ethnicity and race were recorded, all of the civilians were of an ethnicity other than white/caucasian.')
}

function checkFunction9() {
  honkSFX.play();
  document.getElementById('ninthCheck').style.display = 'flex';
  console.log(checked);
  checked++;

  document.getElementById('officer9').style.display = 'none';
  alert('Every single one of the 3996 officers in the Propublica database has at least one substanciated allegation made against them.')
}

function checkFunction10() {
  honkSFX.play();
  document.getElementById('tenthCheck').style.display = 'flex';
  console.log(checked);
  checked++;

  document.getElementById('officer10').style.display = 'none';
  alert('This data was obtained from:\nhttps://www.theguardian.com/us-news/datablog/2020/aug/04/new-york-police-department-allegations-complaints\nhttps://projects.propublica.org/nypd-ccrb/')
}

function checkedWrong() {
  wrongSFX.play();
}
