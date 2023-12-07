//Global variables
let scores = [0, 0];
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

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
    move: DIRECTION.IDLE,
    speed: 7
}

var aipaddle = {
    width: 20,
    height 100,
    x: side === 'right' ? 150 : this.canvas.width - 150,
    y: (this.canvas.height / 2) - 35,
    move: DIRECTION.IDLE,
    speed: 7
}

var Game = {
    initialize: function () {

        this.canvas.width = 1000;
        this.canvas.height = 700;

        this.canvas.style.width = (this.canvas.width / 2) + 'px';
        this.canvas.style.height = (this.canvas.height / 2) + 'px';

        this.player = Ai.new.call(this, 'left');
        this.ai = Ai.new.call(this, 'right');
        this.ball = Ball.new.call(this);

        this.ai.speed = 5;
        this.running = this.over = false;
        this.turn = this.ai;
        this.timer = this.round = 0;
        this.color = 'black';

        Pong.menu();
        Pong.listen();
    }
}
