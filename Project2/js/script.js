"use strict";

// for section 1
var ctx = document.getElementById('myChart').getContext('2d');

//for section 2
var canvas;
let activationButton;

let bulletX = 450;
let bulletVX = 1;

let shotBullet = false;

let killSize = 50;
let killX;


// first graph
function killedBy() {

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['John', 'Marcus', 'Viggo', 'Winston', 'Ms. Pierce', 'Iosef'],
        datasets: [{
            backgroundColor: ['black', 'white', 'green', 'blue', 'gold', 'red', 'cyan',],
            borderWidth: '0',
            data: [77, 3, 1, 1, 1, 1]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom'
        }
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
              backgroundColor: ['black', 'white', 'green', 'blue', 'gold', 'red', 'cyan', 'magenta'],
              borderWidth: '0',
              data: [41, 14, 4, 2, 4, 4, 5, 3]
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Weapons Usage',
          position: 'top',
          fontSize: 24
        },
        legend: {
          position: 'bottom',

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

if (shotBullet == true && bulletX <= 1452) {

  updatePositionBullet();
  noStroke();
  fill(255,0,0);
  ellipse(bulletX,400,15,10);
  createKilled();

}
}

function timeline() {
  stroke(255);
  line(450,400,1452,400);
}

function shootingBullet() {
  shotBullet = true;
}

function updatePositionBullet() {
  bulletX += bulletVX;
}

function createKilled() {
  if (bulletX == 600 || bulletX == 740 || bulletX == 741 || bulletX == 742 || bulletX == 743 || bulletX == 744 || bulletX == 745) {
    console.log('hit');
    fill(255, 0, 0, 60);
    ellipse(bulletX,400,5,100);
  }
}
