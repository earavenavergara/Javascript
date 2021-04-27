var world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
  [2, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
var score = 0;
var life = 3;
var pacman = {
  x: 10,
  y: 9,
};
var mov = "up";

function displayWorld() {
  var output = "";
  for (var i = 0; i < world.length; i++) {
    output += "<div class='row'>";
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] == 2) {
        output += "<div class='brick'></div>";
      } else if (world[i][j] == 1) {
        output += "<div class='coin'></div>";
      } else if (world[i][j] == 0) {
        output += "<div class='empty'></div>";
      } else if (world[i][j] == 3) {
        output += "<div class='cherry'></div>";
      } else if (world[i][j] == 4) {
        output += "<div class='ghost'></div>";
      }
    }
    output += "</div>";
  }
  //console.log(output);
  document.getElementById("world").innerHTML = output;
}
function displayPacman() {
  document.getElementById("pacman").style.top = pacman.y * 20 + "px";
  document.getElementById("pacman").style.left = pacman.x * 20 + "px";
}
function displayScore() {
  document.getElementById("score").innerHTML = score;
  document.getElementById("life").innerHTML = life;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function (e) {
  if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
    //mov derecha
    document.getElementById("pacman").style.backgroundImage =
      "url('mov-pacman/right-pacman.gif')";
    pacman.x++;
  } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
    //mov isquierda
    document.getElementById("pacman").style.backgroundImage =
      "url('mov-pacman/left-pacman.gif')";
    pacman.x--;
  } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
    //mov arriba
    document.getElementById("pacman").style.backgroundImage =
      "url('mov-pacman/up-pacman.gif')";
    pacman.y--;
  } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
    //mov abajo
    document.getElementById("pacman").style.backgroundImage =
      "url('mov-pacman/down-pacman.gif')";
    pacman.y++;
  }
  if (world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
    score += 10;
  } else if (world[pacman.y][pacman.x] == 3) {
    world[pacman.y][pacman.x] = 0;
    score += 50;
  } else if (world[pacman.y][pacman.x] == 4) {
    life -= 1;
  }
  //console.log(e.keyCode);
  displayWorld();
  displayScore();
  displayPacman();
};
