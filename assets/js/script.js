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
const ballRadius = 3;
const ballColor = "white";
const ballBorderColor = "white";
const boardBackground = "black";

let intervalID;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballSpeed = 1;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;

//Player 1 paddle
let paddle1 = {
    width: 25,
    height: 10,
    x: 3,
    y: 3
};

//AI paddle
let paddle2 = {
    width: 25,
    height: 10,
    x: gameWidth - 13,
    y: gameHeight - 28
};

//Listener for paddle movement
window.addEventListener("keydown", changeDirection);

gameStart();

function gameStart() {
    createBall();
    nextTick();
};

//Main loop
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


//General background for gameboard
function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

//Style for the ball
function drawBall(ballX, ballY) {
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = ballBorderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
};

//Math round to randomise if the ball goes right of left when spawned
function createBall() {
    ballSpeed = 1;
    if (Math.round(Math.random()) == 1) {
        ballXDirection = 1;
    } else {
        ballXDirection = -1;
    }
    if (Math.round(Math.random()) == 1) {
        ballYDirection = 1;
    } else {
        ballYDirection = -1;
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);
};

function moveBall() {
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);
};

//Display for paddles
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

//To make sure ball bounces off walls/paddles
function checkCollision() {
    //ballcollision for top
    if (ballY <= 0 + ballRadius) {
        ballYDirection *= -1;
    }
    //ballcollision for bottom
    if (ballY >= gameHeight - ballRadius) {
        ballYDirection *= -1;
    }
    //reset score/game when ball passes left wall
    if (ballX <= 0) {
        player2Score += 1;
        updateScore();
        createBall();
        return;
    }
    //reset score/game when ball passes right wall
    if (ballX >= gameWidth) {
        player1Score += 1;
        updateScore();
        createBall();
        return;
    }

    //ballcollision for paddles
    if (ballX <= (paddle1.x + paddle1.height + ballRadius)) {
        if (ballY > paddle1.y && ballY < paddle1.y + paddle1.width) {
            ballX = (paddle1.x + paddle1.height) + ballRadius;
            ballXDirection *= -1;
            ballSpeed += 0.1;
        }
    }
    if (ballX >= (paddle2.x - ballRadius)) {
        if (ballY > paddle2.y && ballY < paddle2.y + paddle2.width) {
            ballX = (paddle2.x - ballRadius);
            ballXDirection *= -1;
            ballSpeed += 0.1;
        }
    }
};

//To move paddles up and down
function changeDirection(event) {
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    //Paddle 1 up
    switch (keyPressed) {
        case (paddle1Up):
            if (paddle1.y > 5) {
                paddle1.y -= paddleSpeed;
            }
            break;
        //Paddle 1 Down
        case (paddle1Down):
            if (paddle1.y < 120) {
                paddle1.y += paddleSpeed;
            }
            break;
    }
    //Paddle 2 up
    switch (keyPressed) {
        case (paddle2Up):
            if (paddle2.y > 5) {
                paddle2.y -= paddleSpeed;
            }
            break;
        //Paddle 2 Down
        case (paddle2Down):
            if (paddle2.y < 120) {
                paddle2.y += paddleSpeed;
            }
            break;
    }
};

//Update score board
function updateScore() {
    scoreText.textContent = `${player1Score} : ${player2Score}`;
};

function resetGame() {

};