export default function GameBoard({ onSelectSquare, board }) {
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// const handleSelectSquare = (rowIdx, colIdx) => {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedBoard[rowIdx][colIdx] = symbol;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// };
	return (
		<ol id="game-board">
			{board.map((row, rowIdx) => (
				<li key={rowIdx}>
					<ol>
						{row.map((playerSymbol, colIdx) => (
							<li key={colIdx}>
								<button
									onClick={() => onSelectSquare(rowIdx, colIdx)}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
