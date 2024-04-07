import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
	const [answerState, setAnswerState] = useState("");
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(
		(selectedAnswer) => {
			setAnswerState("answered");
			setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

			setTimeout(() => {
				if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
					setAnswerState("correct");
				} else {
					setAnswerState("wrong");
				}
			});
		},
		[activeQuestionIndex]
	);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	if (isQuizComplete) {
		return (
			<div id="summary">
				<img src={quizComplete} alt="trophy" />
				<h2>Quiz Completed!</h2>
			</div>
		);
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5);

	return (
		<div id="quiz">
			<div id="question">
				<QuestionTimer
					key={activeQuestionIndex}
					timeout={10000}
					onTimeout={handleSkipAnswer}
				/>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id="answers">
					{shuffledAnswers.map((answer) => (
						<li key={answer} className="answer">
							<button onClick={() => handleSelectAnswer(answer)}>
								{answer}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Quiz;
