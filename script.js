var firstGamer = document.querySelector("#first");
var secondGamer = document.querySelector("#second");
var winner = document.querySelector("#winner");
let ran;

var variants = ["rock", "paper", "scissors"];

function A() {
    ran = Math.floor(Math.random() * (3 - 0) + 0);
    return variants[ran];
}

window.onkeyup = function (e) {

    if (e.key === "r") {
        A();
        firstGamer.innerHTML = 'First Gamer is: <span>"Rock"</span> ';

        if (variants[ran] === "scissors") {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Scissors"</span> ';
            winner.innerHTML = 'Winner is  <span>"Rock"</span> ';
        } else if (variants[ran] === "paper") {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Paper"</span> ';
            winner.innerHTML = 'Winner is  <span>"Paper"</span> ';
        } else {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Rock"</span> ';
            winner.innerHTML = "There is no <span>Winner</span> ";
        }
    }
    
    else if (e.key === "p") {
        A();
        firstGamer.innerHTML = 'First Gamer is: <span>"Paper"</span> ';

        if (variants[ran] === "scissors") {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Scissors"</span> ';
            winner.innerHTML = 'Winner is  <span>"Scissors"</span> ';
        } else if (variants[ran] === "rock") {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Rock"</span> ';
            winner.innerHTML = 'Winner is  <span>"Paper"</span> ';
        } else {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Paper"</span> ';
            winner.innerHTML = "There is no <span>Winner</span> ";
        }
    }
    
    else if (e.key === "s") {
        A();
        firstGamer.innerHTML = 'First Gamer is: <span>"Scissors"</span> ';
        
        if (variants[ran] === "paper") {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Paper"</span> ';
            winner.innerHTML = 'Winner is  <span>"Scissors"</span> ';
        } else if (variants[ran] === "rock") {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Rock"</span> ';
            winner.innerHTML = 'Winner is  <span>"Rock"</span> ';
        } else {
            secondGamer.innerHTML = 'Second Gamer is: <span>"Scissors"</span> ';
            winner.innerHTML = "There is no <span>Winner</span> ";
        }
    }
};