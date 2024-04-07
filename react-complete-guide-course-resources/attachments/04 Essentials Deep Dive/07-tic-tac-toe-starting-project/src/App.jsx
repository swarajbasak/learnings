import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "../../winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function App() {
	// const [activePlayer, setActivePlayer] = useState("X");
	const [gameTurns, setGameTurns] = useState([]);
	const [isGameOver, setIsGameOver] = useState(false);
	const [players, setPlayers] = useState({
		X: "Player 1",
		O: "Player 2",
	});

	let winner = null;

	let activePlayer = "X";

	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		activePlayer = "O";
	}

	let gameBoard = [...initialGameBoard.map((array) => [...array])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquare = gameBoard[combination[0].row][combination[0].column];
		const secondSquare = gameBoard[combination[1].row][combination[1].column];
		const thirdSquare = gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquare &&
			firstSquare === secondSquare &&
			firstSquare === thirdSquare
		) {
			winner = players[firstSquare];
		}
	}

	const isDraw = gameTurns.length === 9 && !winner;

	const handleSelectSquare = (rowIdx, colIdx) => {
		// setActivePlayer((currPlayer) => {
		// 	return currPlayer === "X" ? "O" : "X";
		// });

		setGameTurns((prevTurns) => {
			let currPlayer = "X";

			if (prevTurns.length > 0 && prevTurns[0].player === "X") {
				currPlayer = "O";
			}

			const updatedTurns = [
				{
					square: {
						row: rowIdx,
						col: colIdx,
					},
					player: currPlayer,
				},
				...prevTurns,
			];

			return updatedTurns;
		});
	};

	const handleRestart = () => {
		setGameTurns([]);
	};

	const handlePlayerNameChange = (symbol, newName) => {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
		});
	};

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						name="Player 1"
						symbol="X"
						isActive={activePlayer === "X"}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						name="Player 2"
						symbol="O"
						isActive={activePlayer === "O"}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || isDraw) && (
					<GameOver winner={winner} onRestart={handleRestart} />
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
