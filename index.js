var playerTurn = 1;
var numTurns = 0;
var gameEnd = false;
var winner = "";

const currTurn = document.getElementById('currturn');
const boxes = document.getElementsByClassName('boxes');

for (let i = 0; i < 9; i++) {
    // Selects the p tag for the current box
    const currChoice = document.getElementById('choice' + (i + 1));
    boxes[i].addEventListener('click', function() {
        changeSymbol(currChoice);
    });
};


function changeSymbol(currChoice) {
    // The program no longer changes symbols if the game is over.
    if (gameEnd === true) {
        return;
    };

    // Checks if the chosen square already has an X or an O and if so prevents it from being overwritten.
    if (currChoice.textContent !== "") {
        alert("That square has already been taken, please try another square");
        return;
    };

    // Checks who's turn it is and assigns X or O respectively.
    // It also updates the Current Turn p tag and the total number of turns so far.
    if (playerTurn === 1) {
        currChoice.textContent = "X";
        currChoice.classList.add('x');
        playerTurn = 2;
        currTurn.textContent = 'Current Turn: Player 2';
        numTurns += 1;
    } else {
        currChoice.textContent = "O";
        currChoice.classList.add('o');
        playerTurn = 1;
        currTurn.textContent = 'Current Turn: Player 1';
        numTurns += 1;
    };

    //Checks to see if anyone has won yet.
    gameEnd = checkWin();
    if (gameEnd === true) {
        return;
    };

    //Checks to see if the game should have ended in a tie.
    if (numTurns === 9) {
        gameEnd = true;
        alert("The game has ended in a tie. refresh the page to restart.");
    };
};

function checkWin() {
    // Loads all of the current values of the boxes and assigns them to variables.
    const box1 = document.getElementById('choice1');
    const box2 = document.getElementById('choice2');
    const box3 = document.getElementById('choice3');
    const box4 = document.getElementById('choice4');
    const box5 = document.getElementById('choice5');
    const box6 = document.getElementById('choice6');
    const box7 = document.getElementById('choice7');
    const box8 = document.getElementById('choice8');
    const box9 = document.getElementById('choice9');

    // Checks if any of the 8 possible winning patterns have 3 X's in a row.
    // If so then it declares player 1 as the winner and exits the function.
    if ((box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") || 
    (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") || 
    (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") || 
    (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") || 
    (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") || 
    (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") || 
    (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") || 
    (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X")) {
        alert("The game has ended and Player 1 has won! Refresh the page to restart");
        currTurn.textContent = 'Winner: Player 1!';
        return true;
    };
    
    // Same thing as the first big if statement but checks for 3 O's in a row.
    // If so then it declares player 2 as the winner and exits the function.
    if ((box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") || 
    (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") || 
    (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") || 
    (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") || 
    (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") || 
    (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") || 
    (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") || 
    (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O")) {
        alert("The game has ended and Player 2 has won! Refresh the page to restart");
        currTurn.textContent = 'Winner: Player 2!';
        return true;
    };

    // If none of these statements are true yet then it returns false because no one has won yet.
    return false;
};