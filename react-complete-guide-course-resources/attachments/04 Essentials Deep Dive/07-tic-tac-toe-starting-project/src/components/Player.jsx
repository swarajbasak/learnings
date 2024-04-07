import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	const editButtonHandler = () => {
		setIsEditing((editing) => !editing);

		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};

	const handleChange = (event) => {
		setPlayerName(event.target.value);
	};

	let playerNameSpan = isEditing ? (
		<input
			type="text"
			required
			placeholder="enter name"
			className="player-name"
			value={playerName}
			onChange={handleChange}
		></input>
	) : (
		<span className="player-name">{playerName}</span>
	);
	return (
		<li className={isActive ? "active" : ""}>
			<span className="player">
				{playerNameSpan}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={editButtonHandler}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
