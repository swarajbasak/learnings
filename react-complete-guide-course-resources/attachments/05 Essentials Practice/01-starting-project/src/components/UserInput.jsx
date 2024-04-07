export default function UserInput({
	initialInvestment,
	annualInvestment,
	expectedReturn,
	duration,
	handleUserInput,
}) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>INITIAL INVESTMENT</label>
					<input
						type="number"
						required
						onChange={(event) =>
							handleUserInput("initialInvestment", event.target.value)
						}
						value={initialInvestment}
					/>
				</p>
				<p>
					<label>ANNUAL INVESTMENT</label>
					<input
						type="number"
						required
						onChange={(event) =>
							handleInputChange("annualInvestment", event.target.value)
						}
						value={annualInvestment}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>EXPECTED RETURN</label>
					<input
						type="number"
						required
						onChange={(event) =>
							handleInputChange("expectedReturn", event.target.value)
						}
						value={expectedReturn}
					/>
				</p>
				<p>
					<label>DURATION</label>
					<input
						type="number"
						required
						onChange={(event) =>
							handleInputChange("duration", event.target.value)
						}
						value={duration}
					/>
				</p>
			</div>
		</section>
	);
}
