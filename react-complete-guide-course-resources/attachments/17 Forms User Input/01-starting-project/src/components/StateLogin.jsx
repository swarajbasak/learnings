import { useState } from "react";

export default function Login() {
	const [enteredValues, setEnteredValues] = useState({
		email: "",
		password: "",
	});

	const handleValueChange = (event, type) => {
		setEnteredValues((prevValues) => {
			return {
				...prevValues,
				[type]: event.target.value,
			};
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={(event) => handleValueChange(event, "email")}
						value={enteredValues.email}
					/>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(event) => handleValueChange(event, "password")}
						value={enteredValues.password}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
