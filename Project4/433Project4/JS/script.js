"use strict";
//prepping the script
$(document).ready(jquerySetup);


let displayVariable = true;

let hoverSFX = new Audio("Assets/hover.mp3");
let selectSFX = new Audio("Assets/select.wav");
let backgroundMusic = new Audio("Assets/wormhole.mp3");

window.onload = function() {
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('particles-js2', 'particles2.json', function() {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('particles-js3', 'particles3.json', function() {
    console.log('callback - particles.js config loaded');
  });
}




function jquerySetup() {

  responsiveVoice.setDefaultRate(1.0);

  $(".epoch4Button").click(function(){
    backgroundMusic.play();
    backgroundMusic.volume = 0.5;
    selectSFX.play(0);
    document.getElementById('epoch5Div').style.display = 'none';
    document.getElementById('epoch6Div').style.display = 'none';
    document.getElementById('projectTitle').style.display = 'none';
    document.getElementById('projectSubtitle').style.display = 'none';
    document.getElementById('kQuote').style.display = 'none';
    document.getElementById('kQuote2').style.display = 'none';
    // document.getElementById('cosmicHorrorDiv').style.display = 'none';
    $("#epoch4Div").fadeIn(2500);
    responsiveVoice.speak("Epoch 4: Technology", "UK English Male");
  })

  $(".epoch5Button").click(function(){
    selectSFX.play(0);
    document.getElementById('epoch4Div').style.display = 'none';
    document.getElementById('epoch6Div').style.display = 'none';
    document.getElementById('projectTitle').style.display = 'none';
    document.getElementById('projectSubtitle').style.display = 'none';
    document.getElementById('kQuote').style.display = 'none';
    document.getElementById('kQuote2').style.display = 'none';
    // document.getElementById('cosmicHorrorDiv').style.display = 'none';
    $("#epoch5Div").fadeIn(2500);
    responsiveVoice.speak("Epoch Five: The Merger of Human Technology with Human Intelligence", "Chinese Male");
  })

  $(".epoch6Button").click(function(){
    selectSFX.play(0);
    document.getElementById('epoch5Div').style.display = 'none';
    document.getElementById('epoch4Div').style.display = 'none';
    document.getElementById('projectTitle').style.display = 'none';
    document.getElementById('projectSubtitle').style.display = 'none';
    document.getElementById('kQuote').style.display = 'none';
    document.getElementById('kQuote2').style.display = 'none';
    // document.getElementById('cosmicHorrorDiv').style.display = 'none';
    $("#epoch6Div").fadeIn(2500);
    responsiveVoice.speak("Epoch 6: the universe wakes up");
  })

  // $(".cosmicHorrorButton").click(function(){
  //   document.getElementById('epoch5Div').style.display = 'none';
  //   document.getElementById('epoch6Div').style.display = 'none';
  //   document.getElementById('epoch4Div').style.display = 'none';
  //   $("#cosmicHorrorDiv").fadeIn(1500);
  // })

}

function developmentVoice() {
  selectSFX.play(0);
  responsiveVoice.speak("Development: Simple mechanisms to elaborate automata");
  $("#sensesIcon").toggle("puff");
}

function epoch4Q2Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("technology was itself capable of sensing, storing, and evaluating elaborate patterns of information", "UK English Male");
  $("#epoch4Quote2Icon").toggle("puff");
}

function epoch4Q3Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("one cubic inch of brain matter every hundred thousand years, whereas we are roughly doubling the computational capacity of computers every year", "Australian Male");
  $("#epoch4Quote3Icon").toggle("puff");
}

//////////// epoch 5 quotes for responsive voice

function epoch5Q1Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("human-machine civilization to transcend the human brain’s limitations", "French Female");
  $("#epoch5Quote1Icon").toggle("puff");
}

function epoch5Q2Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("overcoming the profound limitations of biological evolution", "Chinese Male");
  $("#epoch5Quote2Icon").toggle("puff");
}

function epoch5Q3Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("merger of the vast knowledge embedded in our own brains with the vastly greater capacity, speed, and knowledge-sharing ability of our technology", "Chinese Female");
  $("#epoch5Quote3Icon").toggle("puff");
}

/////////// Epoch 6 quotes for voice

function epoch6Q1Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("We currently understand the speed of light as a bounding factor on the transfer of information, but even that, as hinted, may be superseded", "Portuguese Male");
  $("#epoch6Quote1Icon").toggle("puff");
}

function epoch6Q2Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("Intelligence will begin to saturate the matter and energy in its midst", "US English Female");
  $("#epoch6Quote2Icon").toggle("puff");
}

function epoch6Q3Voice() {
  selectSFX.play(0);
  responsiveVoice.speak("mechanisms of the universe will be transformed into exquisitely sublime forms of intelligence", "UK English Male");
  $("#epoch6Quote3Icon").toggle("puff");
}


////////////// Disable displays

function disableDisplay() {
  if (displayVariable) {
  $("#legendDiv").fadeOut(1500);
  $(".epoch4Button").fadeOut(1500);
  $(".epoch5Button").fadeOut(1500);
  $(".epoch6Button").fadeOut(1500);
  displayVariable = false;
} else if (!displayVariable){
  $("#legendDiv").fadeIn(1500);
  $(".epoch4Button").fadeIn(1500);
  $(".epoch5Button").fadeIn(1500);
  $(".epoch6Button").fadeIn(1500);
  displayVariable = true;
}
}


///// Backup Json data

particlesJS ('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 110.48590120982064,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 5.366458058762717
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
