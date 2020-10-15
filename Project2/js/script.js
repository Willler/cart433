"use strict";

// for section 1
var ctx = document.getElementById('myChart').getContext('2d');

//for section 2
var canvas;
let activationButton;

let bulletX = 450;
let bulletVX = 1;

let shotBullet = false;

let killCount = 0;
let movieMinutes;

//////preloading some sounds
let deathSFX = new Audio("sounds/deathSound.wav");
let gunSFX = new Audio("sounds/gunSound.mp3");
let hmmSFX = new Audio("sounds/hmmSound.wav");
let cockingSFX = new Audio("sounds/cockingSound.wav");
let radarSFX = new Audio("sounds/radarSound.wav");

let wickShootingImg;
let skullImage;
let timerImage;
let spectralFont;

let wickShootingImgX = 100;

function preload() {
  wickShootingImg = loadImage('images/wickShooting.png');
  skullImage = loadImage('images/skull.png');
  timerImage = loadImage('images/timer.png');
  spectralFont = loadFont('fonts/Spectral-SemiBold.ttf')
}



// first graph
function killedBy() {

hmmSFX.play();

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['John', 'Marcus', 'Viggo', 'Winston', 'Ms. Pierce', 'Iosef'],
        datasets: [{
            backgroundColor: ['#4B00EB', '#0C00F5', '#0B3ADE', '#0C77E8', '#009DD1', '#0CE8E5', '#0BDE9F',],
            borderWidth: 3,
            data: [77, 3, 1, 1, 1, 1]
        }]
    },

    // Configuration options go here
    options: {
      rotation: 0.25 * Math.PI,
      legend: {
        position: 'right',
        align: 'start',
        labels: {
          fontSize: 16,
          fontColor: 'white',
          padding: 15
        }
      },
        title: {
          display: true,
          text: 'Killer / Body Count                        ',
          position: 'top',
          fontSize: 24,
          fontColor: 'white',
          padding: 20
        },
      }

});
}

//second graph
function weaponStart() {

  cockingSFX.play();

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
          labels: ['Pistol', 'Assault Rifle', 'Vehicle', 'Sniper', 'Bare Hands', 'Knife', 'Explosives', 'Shotgun'],
          datasets: [{
              backgroundColor: ['#6101D6','#4B00EB', '#0C00F5', '#0B3ADE', '#0C77E8', '#009DD1', '#0CE8E5', '#0BDE9F'],
              borderWidth: 3,
              data: [41, 14, 5, 4, 4, 4, 3, 2]
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Weapons / Lethality                         ',
          position: 'top',
          fontSize: 24,
          fontColor: 'white',
          padding: 20
        },
        legend: {
          position: 'right',
          align: 'end',
          labels: {
            fontSize: 16,
            fontColor: 'white',
            padding: 15
          }

          // display: false
        },

        }

  });

}

function locationStart() {

  radarSFX.play();

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
          labels: ['Red Circle Club', 'Little Russia', "John's House", 'Warehouses', 'Airstrip/Port', 'Streets'],
          datasets: [{
              backgroundColor: ['#0C00F5', '#0B3ADE', '#0C77E8', '#009DD1', '#0CE8E5', '#0BDE9F'],
              borderWidth: 3,
              data: [28, 15, 12, 12, 8, 2]
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Location / Blood Spilled                        ',
          position: 'top',
          fontSize: 24,
          fontColor: 'white',
          padding: 20
        },
        legend: {
          position: 'right',
          labels: {
            fontSize: 16,
            fontColor: 'white',
            padding: 15
          }

          // display: false
          }
        }

  });
}

function setup() {
  canvas = createCanvas(1520, windowHeight);
  // canvas.position(0,0);
  // canvas.style('z-index', '-1');


  background(0);
  activationButton = createButton('Make Them Pay.')
  activationButton.position(150, windowHeight + 265);
  activationButton.mouseClicked(shootingBullet);

  fill('#003D52');
  ellipse((wickShootingImgX + 135), 615, 315, 15);
  image(wickShootingImg, wickShootingImgX, 215, 275, 400);
  timeline();

}

function draw() {




if (shotBullet == true && bulletX <= 1470) {

  updatePositionBullet();
  noStroke();
  fill('#009DD1');
  ellipse(bulletX,375,15,5);
  createKilled();

  rectMode(CENTER);
  fill(0);
  rect(950, 625, 800, 50);

  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  image(skullImage, 660, 600, 40, 51);
  text('Body Count: ' + killCount, 795, 625);
  movieMinutes = (bulletX - 450)/10;
  image(timerImage, 962, 605, 42, 42);
  text('Time Elapsed: ' + movieMinutes, 1120, 625)

}
fill(255);
noStroke();
textSize(32);
textFont(spectralFont);
textAlign(CENTER, CENTER);
text('102 Minutes: A Timeline of Carnage', 950, 135);

}

function timeline() {
  stroke(255);
  line(450,375,1470, 375);
  line (430, 325, 430, 425);
  line (1490, 325, 1490, 425);
}

function shootingBullet() {
  gunSFX.play();
  shotBullet = true;
}

function updatePositionBullet() {
  bulletX += bulletVX;
}

function createKilled() {
  if (bulletX == 740 || bulletX == 741 || bulletX == 742 || bulletX == 743 || bulletX == 744 || bulletX == 745 || bulletX == 750 || bulletX == 755 || bulletX == 760 || bulletX == 762 || bulletX == 764 || bulletX == 770 || bulletX == 930 || bulletX == 933 || bulletX == 943 || bulletX == 946 || bulletX == 950 || bulletX == 952 || bulletX == 954 || bulletX == 957 || bulletX == 970 || bulletX == 972 || bulletX == 974 || bulletX == 976 || bulletX == 978 || bulletX == 980 || bulletX == 982 || bulletX == 984 || bulletX == 986 || bulletX == 988 || bulletX == 990 || bulletX == 992 || bulletX == 994 || bulletX == 996 || bulletX == 998 || bulletX == 1000 || bulletX == 1002 || bulletX == 1004 || bulletX == 1006 || bulletX == 1008 || bulletX == 1060 || bulletX == 1063 || bulletX == 1066 || bulletX == 1069 || bulletX == 1072 || bulletX == 1075 || bulletX == 1100 || bulletX == 1102 || bulletX == 1104 || bulletX == 1106 || bulletX == 1108 || bulletX == 1110 || bulletX == 1112 || bulletX == 1114 || bulletX == 1116 || bulletX == 1170 || bulletX == 1175 || bulletX == 1180 || bulletX == 1185 || bulletX == 1200 || bulletX == 1210 || bulletX == 1214 || bulletX == 1218 || bulletX == 1222 || bulletX == 1226 || bulletX == 1230 || bulletX == 1234 || bulletX == 1238 || bulletX == 1246 || bulletX == 1300 || bulletX == 1304 || bulletX == 1308 || bulletX == 1312 || bulletX == 1316 || bulletX == 1320 || bulletX == 1324 || bulletX == 1365) {
    console.log('hit');
    fill('#009DD140');
    ellipse(bulletX,375,10,300);
    gunSFX.play();
    killCount += 1;


  }
}
