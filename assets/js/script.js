//Global variables
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const paddle1Color = "blue";
const paddle2Color = "red";
const paddleBorder = "white";
const paddleSpeed = 20;
const ballRadius = 20;
const ballColor = "white";
const boardBackground = "black";

let intervalID;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballSpeed = 5;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
    width: 25,
    height: 10,
    x: 3,
    y: 3
};

let paddle2 = {
    width: 25,
    height: 10,
    x: gameWidth - 13,
    y: gameHeight - 28
};

window.addEventListener("keydown", changeDirection);

gameStart();

function gameStart() {
    createBall();
    nextTick();
};

function nextTick() {
    intervalID = setTimeout(() => {
        clearBoard();
        drawPaddles();
        drawBall(ballX, ballY);
        moveBall();
        checkCollision();
        nextTick();
    }, 10);
};

function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

function drawBall() {

};

function createBall() {

};

function moveBall() {

};

function drawPaddles() {
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

function checkCollision() {

};

function changeDirection(event) {
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;

    switch (keyPressed) {
        case (paddle1Up):
            if (paddle1.y > 5) {
                paddle1.y -= paddleSpeed;
            }
            break;
        case (paddle1Down):
            if (paddle1.y < 120) {
                paddle1.y += paddleSpeed;
            }
            break;
    }


};

function updateScore() {

};

function resetGame() {

};