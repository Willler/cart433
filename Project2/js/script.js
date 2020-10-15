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


// first graph
function killedBy() {

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
      legend: {
        position: 'right',
        align: 'start'
      },
        title: {
          display: true,
          text: 'Killers by Body Count',
          position: 'top',
          fontSize: 24
        },
      }

});
}

//second graph
function weaponStart() {

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
          labels: ['Pistol', 'Assault Rifle', 'Sniper', 'Shotgun', 'Bare Hands', 'Knife', 'Vehicle', 'Explosives'],
          datasets: [{
              backgroundColor: ['#6101D6','#4B00EB', '#0C00F5', '#0B3ADE', '#0C77E8', '#009DD1', '#0CE8E5', '#0BDE9F'],
              borderWidth: 3,
              data: [41, 14, 4, 2, 4, 4, 5, 3]
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
          text: 'Urban Battlefields',
          position: 'top',
          fontSize: 24
        },
        legend: {
          position: 'right',

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
  activationButton = createButton('Shoot.')
  activationButton.position(190, windowHeight + 190);
  activationButton.mouseClicked(shootingBullet);




}

function draw() {

  timeline();

if (shotBullet == true && bulletX <= 1470) {

  updatePositionBullet();
  noStroke();
  fill(255,0,0);
  ellipse(bulletX,400,15,5);
  createKilled();

  rectMode(CENTER);
  fill(100, 0, 0);
  rect(150, 120, 200, 100);

  fill(255);
  stroke(255);
  textSize(24);
  text(killCount, 100, 100);
  movieMinutes = (bulletX - 450)/10;
  text(movieMinutes, 100, 150)


}

}

function timeline() {
  stroke(255);
  // line(450,400,1470,400);
  line (430, 350, 430, 450);
  line (1490, 350, 1490, 450);
}

function shootingBullet() {
  shotBullet = true;
}

function updatePositionBullet() {
  bulletX += bulletVX;
}

function createKilled() {
  if (bulletX == 740 || bulletX == 741 || bulletX == 742 || bulletX == 743 || bulletX == 744 || bulletX == 745 || bulletX == 750 || bulletX == 755 || bulletX == 760 || bulletX == 762 || bulletX == 764 || bulletX == 767 || bulletX == 770 || bulletX == 930 || bulletX == 933 || bulletX == 943 || bulletX == 946 || bulletX == 950 || bulletX == 952 || bulletX == 954 || bulletX == 957 || bulletX == 960 || bulletX == 970 || bulletX == 972 || bulletX == 974 || bulletX == 976 || bulletX == 978 || bulletX == 980 || bulletX == 982 || bulletX == 984 || bulletX == 986 || bulletX == 988 || bulletX == 990 || bulletX == 992 || bulletX == 994 || bulletX == 996 || bulletX == 998 || bulletX == 1000 || bulletX == 1002 || bulletX == 1004 || bulletX == 1006 || bulletX == 1008 || bulletX == 1010 || bulletX == 1060 || bulletX == 1063 || bulletX == 1066 || bulletX == 1069 || bulletX == 1072 || bulletX == 1075 || bulletX == 1100 || bulletX == 1102 || bulletX == 1104 || bulletX == 1106 || bulletX == 1108 || bulletX == 1110 || bulletX == 1112 || bulletX == 1114 || bulletX == 1116 || bulletX == 1170 || bulletX == 1175 || bulletX == 1180 || bulletX == 1185 || bulletX == 1200 || bulletX == 1210 || bulletX == 1214 || bulletX == 1218 || bulletX == 1222 || bulletX == 1226 || bulletX == 1230 || bulletX == 1234 || bulletX == 1238 || bulletX == 1246 || bulletX == 1300 || bulletX == 1304 || bulletX == 1308 || bulletX == 1312 || bulletX == 1316 || bulletX == 1320 || bulletX == 1324 || bulletX == 1365) {
    console.log('hit');
    fill(255, 0, 0, 40);
    ellipse(bulletX,400,10,300);
    gunSFX.play();
    killCount += 1;


  }
}
