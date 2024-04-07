import { useState } from "react";

import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

import { calculateInvestmentResults } from "./util/investment";

function App() {
	const [initialInvestment, setInitialInvestment] = useState(1000);
	const [annualInvestment, setAnnualInvestment] = useState(12000);
	const [expectedReturn, setExpectedReturn] = useState(10);
	const [duration, setDuration] = useState(5);

	const handleUserInput = (inputType, value) => {
		if (inputType === "initialInvestment") {
			setInitialInvestment(value);
		} else if (inputType === "annualInvestment") {
			setAnnualInvestment(value);
		} else if (inputType === "expectedReturn") {
			setExpectedReturn(value);
		} else if (inputType === "duration") {
			setDuration(value);
		}
	};

	const annualData = calculateInvestmentResults({
		initialInvestment: initialInvestment,
		annualInvestment: annualInvestment,
		expectedReturn: expectedReturn,
		duration: duration,
	});

	return (
		<>
			<Header />
			<UserInput
				handleUserInput={handleUserInput}
				initialInvestment={initialInvestment}
				annualInvestment={annualInvestment}
				expectedReturn={expectedReturn}
				duration={duration}
			/>
			<Result annualData={annualData} />
		</>
	);
}

export default App;
