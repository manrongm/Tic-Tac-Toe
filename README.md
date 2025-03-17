# Tic Tac Toe AI - A Command Line Game

## Overview
Tic Tac Toe AI is a command-line version of the classic **Tic Tac Toe** game, where a user plays against a computer opponent. The game supports configurable board sizes and scripted moves. It is implemented in **JavaScript (ES6)**, using **Node.js** and **functional programming** techniques.

## Features
- **Configurable Board Size**: Supports board dimensions other than 3x3.
- **Interactive Gameplay**: Players input their moves in **algebraic notation (A1, B2, etc.)**.
- **Computer Opponent**: The AI opponent can play scripted or randomly-generated moves.
- **Game Validation**: Ensures valid moves, checks for a winner, and detects when the board is full.
- **Modular Code Structure**: Uses helper functions for board generation, validation, and game logic.
- **Unit Testing**: Includes automated tests using **Mocha** and **Chai**.
- **Linting**: Uses **ESLint** to enforce code quality.

## Game Rules
1. **Objective**: The goal is to get three (or more, depending on board size) of your marks in a row, column, or diagonal before your opponent.
2. **Turn Order**:
   - 'X' goes first, followed by 'O'.
   - If the user is 'O', the computer plays first.
3. **Making Moves**:
   - Players take turns placing their mark (X or O) on the board.
   - Moves are entered using **algebraic notation** (e.g., 'A1', 'B2').
   - Only empty squares can be selected.
4. **Winning the Game**:
   - A player wins when they place three of their marks in a row, column, or diagonal.
   - If all squares are filled without a winner, the game ends in a **draw**.
5. **Computer Moves**:
   - If a configuration file is provided, the computer follows scripted moves.
   - Otherwise, the computer selects a valid move randomly.

## Repository Structure
```
|-- src
|   |-- tic-tac-toe.js   # Game logic & helper functions
|-- tests
|   |-- tic-tac-toe-test.mjs  # Unit tests
|-- data
|   |-- example-config.json  # Sample game configuration
|-- .gitignore
|-- package.json
|-- README.md
|-- app.js  # Main entry point to run the game
```

## Getting Started
### Prerequisites
Ensure you have:
- **Node.js** (>= 14.x recommended)
- **npm** installed

### Installation
1. Clone this repository from GitHub:
   ```sh
   git clone https://github.com/yourusername/tic-tac-toe-ai.git
   cd tic-tac-toe-ai
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up ESLint:
   ```sh
   npm init @eslint/config@latest
   ```

## Usage
### Running the Game
You can play the game interactively by running:
```sh
node app.js
```
Alternatively, you can start a game with a configuration file:
```sh
node app.js data/example-config.json
```
### Example Configuration File
```json
{
    "board": " XO   X  O               ",
    "playerLetter": "X",
    "computerLetter": "O",
    "computerMoves": ["E1", "C3"]
}
```
### Expected Output
```
Computer will make the following moves: [ 'E1', 'C3' ]
Player is X, Computer is O

     1   2   3
   +---+---+---+
 A | X | O |   |
   +---+---+---+
 B |   | X |   |
   +---+---+---+
 C |   |   | O |
   +---+---+---+

What's your move?
> B3
```

## Development
### Running Unit Tests
To run the tests, use:
```sh
npx mocha tests/tic-tac-toe-test.mjs
```

### Linting Code
To check for style and syntax errors:
```sh
npx eslint src/*
```
To automatically fix issues:
```sh
npx eslint src/* --fix
```

### Committing and Pushing Code
Follow these best practices:
- **Commit regularly** (at least 4 times during development)
- **Write meaningful commit messages**
```sh
git add .
git commit -m "Implemented AI move logic"
git push origin main
```

## Contributing
Contributions are welcome! Submit an issue or a pull request if you have improvements.

## License
This project is licensed under the **MIT License**.

---
Enjoy your game! 🎮


