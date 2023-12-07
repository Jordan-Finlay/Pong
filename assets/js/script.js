//Global variables
let scores = [0, 0];
var ball = {
    width: 20,
    height: 20,
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 4,
    moveX: DIRECTION.IDLE,
    moveY: DIRECTION.IDLE
};

const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
}

var paddle = {
    width: 20,
    height 100,
    x: side === 'left' ? 150 : this.canvas.width - 150,
    y: (this.canvas.height / 2) - 35,
    score: 0,
    move: DIRECTION.IDLE,
    speed: 7
}