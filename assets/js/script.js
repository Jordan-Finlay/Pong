const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

let scores = [0, 0];
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    speed: 4,
    dx: 4,
    dy: 4
}