// app.js
import * as tic from './src/tic-tac-toe.js';
import readlineSync from 'readline-sync';
import fs from 'fs';

let board = tic.boardFromString("         ");
let playerLetter = "X";
let computerLetter = "O";
let computerMoves = [];


function displayBoard(board) {
    const size = Math.sqrt(board.length);
    let boardString = "\n    " + Array.from({ length: size }, (_, i) => i + 1).join("   ") + "\n";
    boardString += "  " + "+---".repeat(size) + "+\n";
    
    for (let row = 0; row < size; row++) {
        const rowLabel = String.fromCodePoint(65 + row);
        let rowString = rowLabel + " |";
        for (let col = 0; col < size; col++) {
            rowString += ` ${board[tic.rowColToIndex(board, row, col)] || " "} |`;
        }
        boardString += rowString + "\n  " + "+---".repeat(size) + "+\n";
    }
    console.log(boardString);
}


function displayGameInfo() {
    if (computerMoves.length > 0) {
        console.log("Computer will make the following moves:", computerMoves);
    }
    console.log(`Player is ${playerLetter}, Computer is ${computerLetter}`);
    displayBoard(board);
}


function playGame() {
    let currentPlayer = 'X';
    
    while (!tic.isBoardFull(board) && !tic.getWinner(board)) {
        if (currentPlayer === playerLetter) {
            let move;
            do {
                move = readlineSync.question("What's your move? ");
                if (!tic.isValidMove(board, move)) {
                    console.log("Invalid move! Enter a valid move in the correct format.");
                }
            } while (!tic.isValidMove(board, move));
            
            board = tic.placeLetter(board, playerLetter, move);
        } else {
            let move = null;
            while (computerMoves.length > 0) {
                const nextMove = computerMoves.shift();
                if (tic.isValidMove(board, nextMove)) {
                    move = nextMove;
                    break;
                }
            }
            
            if (move === null) {
                const emptyCells = board.map((cell, index) => cell === ' ' ? index : null).filter(index => index !== null);
                const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                const { row, col } = tic.indexToRowCol(board, randomMove);
                move = String.fromCodePoint(65 + row) + (col + 1);
            }
            
            board = tic.placeLetter(board, computerLetter, move);
            readlineSync.question("Press <ENTER> to show computer's move...");
        }
        
        displayBoard(board);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    
    const winner = tic.getWinner(board);
    if (winner) {
        console.log(`${winner === playerLetter ? "Player" : "Computer"} won!!!`);
    } else {
        console.log("It's a draw!");
    }
}


const args = process.argv.slice(2);
if (args.length > 0) {
    const configFile = args[0];
    fs.readFile(configFile, 'utf8', (err, data) => {
        if (err) {
            console.error("Configuration file not found");
            process.exit(1);
        }
        const config = JSON.parse(data);
        board = tic.boardFromString(config.board);
        playerLetter = config.playerLetter;
        computerLetter = config.computerLetter;
        computerMoves = config.computerMoves;
        displayGameInfo();
        playGame();
    });
}
else {
    displayGameInfo();
    playGame();
}