import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is branch of Physics that deals with birth and death of stars?',
			answerOptions: [
				{ answerText: 'Astronomy', isCorrect: false },
				{ answerText: 'Cosmology', isCorrect: false },
				{ answerText: 'Stellar Physics', isCorrect: true },
				{ answerText: 'Astrophysics', isCorrect: false },
			],
		},
		{
			questionText: 'When did NASA start their operation?',
			answerOptions: [
				{ answerText: 'Dec 16, 1960', isCorrect: false },
				{ answerText: 'Oct 1, 1950', isCorrect: true },
				{ answerText: 'Oct 4, 1957', isCorrect: false },
				{ answerText: 'April 2, 1964', isCorrect: false },
			],
		},
		{
			questionText: "Which spacecraft crashed into the gas giant Saturn after it's mission?",
			answerOptions: [
				{ answerText: 'Cassini', isCorrect: true },
				{ answerText: 'Juno', isCorrect: false },
				{ answerText: 'Voyager 1', isCorrect: false },
				{ answerText: 'Voyager 2', isCorrect: false },
			],
		},
		{
			questionText: "Which is the largest moon known in our Solar System?",
			answerOptions: [
				{ answerText: 'Titan', isCorrect: false },
				{ answerText: 'Europa', isCorrect: false },
				{ answerText: 'Callisto', isCorrect: false },
				{ answerText: 'Ganymede', isCorrect: true },
			],
		},
	];

	const[currentQuestion, setCurrentQuestion] = useState(0);
	const[showScore, setShowScore] = useState(false)
	const[score, setScore] = useState(0)

	const handleClick = (isCorrect) => {

		if(isCorrect === true){
			setScore(score + 1)
			alert('Yaay! Right Answer!')
		}

		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		}else{
			setShowScore(true)	
		}
	}

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => <button onClick={() => handleClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}
