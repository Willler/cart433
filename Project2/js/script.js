"use strict";

var ctx = document.getElementById('myChart').getContext('2d');


function startMe() {

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ['Gun', 'Bare Fists', 'Wire', 'Talk'],
        datasets: [{
            backgroundColor: ['rgb(255, 99, 132)','rgb(0, 99, 132)','rgb(255, 99, 0)', 'black'],
            borderWidth: '0',
            data: [2,8,6,3]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        // display: false
        }
      }

});
}




function weaponStart() {

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'polarArea',

      // The data for our dataset
      data: {
          labels: ['Pistol', 'Assault Rifle', 'Sniper', 'Shotgun', 'Bare Hands', 'Knife', 'Vehicle', 'Explosives'],
          datasets: [{
              backgroundColor: ['black', 'white', 'green', 'blue', 'gold', 'red', 'cyan', 'magenta'],
              borderWidth: '1',
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
