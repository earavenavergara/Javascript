var world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 3, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 3, 2],
  [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
  [2, 1, 2, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
  [2, 3, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
var score = 0;
var life = 3;
var pacman = {
  x: 10,
  y: 9,
};
var ghost = {
  x: 10,
  y: 5,
};

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
        //console.log(i, j);
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
function movGhost() {
  var num = 0;
  num = getRandomInt(1, 5);
  //console.log(num);
  if (num == 1 && world[ghost.y][ghost.x + 1] != 2) {
    world[ghost.y][ghost.x] = 1;
    ghost.x++;
    world[ghost.y][ghost.x] = 4;
  } else if (num == 2 && world[ghost.y][ghost.x - 1] != 2) {
    world[ghost.y][ghost.x] = 1;
    ghost.x--;
    world[ghost.y][ghost.x] = 4;
  } else if (num == 3 && world[ghost.y + 1][ghost.x] != 2) {
    world[ghost.y][ghost.x] = 1;
    ghost.y++;
    world[ghost.y][ghost.x] = 4;
  } else if (num == 4 && world[ghost.y - 1][ghost.x] != 2) {
    world[ghost.y][ghost.x] = 1;
    ghost.y--;
    world[ghost.y][ghost.x] = 4;
  }
  displayWorld();
}
displayWorld();
displayPacman();
displayScore();
window.addEventListener(
  "keydown",
  function (event) {
    //console.log(event.code);
    if (event.code == "ArrowRight" && world[pacman.y][pacman.x + 1] != 2) {
      //mov derecha
      document.getElementById("pacman").style.backgroundImage =
        "url('mov-pacman/right-pacman.gif')";
      pacman.x++;
    } else if (
      event.code == "ArrowLeft" &&
      world[pacman.y][pacman.x - 1] != 2
    ) {
      //mov isquierda
      document.getElementById("pacman").style.backgroundImage =
        "url('mov-pacman/left-pacman.gif')";
      pacman.x--;
    } else if (event.code == "ArrowUp" && world[pacman.y - 1][pacman.x] != 2) {
      //mov arriba
      document.getElementById("pacman").style.backgroundImage =
        "url('mov-pacman/up-pacman.gif')";
      pacman.y--;
    } else if (
      event.code == "ArrowDown" &&
      world[pacman.y + 1][pacman.x] != 2
    ) {
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
    movGhost();
    displayWorld();
    displayScore();
    displayPacman();
  },
  true
);
