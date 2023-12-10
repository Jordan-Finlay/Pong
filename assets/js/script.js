//Global variables
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height; 
const paddle1Color = "blue";
const paddle2Color = "blue";
const paddleBorder = "white";
const paddleSpeed = 15;
const ballRadius = 20;
const ballColor = "white";

let scores = [0, 0];
let intervalID;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballSpeed = 5;
let ballXDirection = 0;
let ballYdirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
    width: 25,
    height: 10,
    x: 3,
    y: 3,
    speed: 7
};

let paddle2 = {
    width: 25,
    height: 10,
    x: gameWidth - 13,
    y: gameHeight - 28,
    speed: 7
};


gameStart();
drawPaddles();


function gameStart (){
    
};

function nextTick (){

};

function clearBoard (){

};

function drawBall() {

};

function createBall (){

};

function drawPaddles(){ 
    ctx.strokeStyle = paddleBorder;

    //Paddle 1 properties
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.height, paddle1.width);
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.height, paddle1.width);

    //Paddle 2 properties
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.height, paddle2.width);
    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.height, paddle2.width);
    
};

function checkCollision(){

};

function changeDirection(){

};

function updateScore(){

};

function resetGame(){

};