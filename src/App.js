import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'HTML Stand For?',
			answerOptions: [
				{ answerText: 'Hyper Text Makeup Language', isCorrect: false },
				{ answerText: 'Hypo Text Markup Language', isCorrect: false },
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Hyper Test Markup Language ', isCorrect: false },
			],
		},
		{
			questionText: 'OOP Stand For?',
			answerOptions: [
				{ answerText: 'Object Oriented Problem', isCorrect: false },
				{ answerText: 'Object Oriented Program', isCorrect: true },
				{ answerText: 'Object Oriented Pakistan', isCorrect: false },
				{ answerText: 'Object Oriented Page', isCorrect: false },
			],
		},
		{
			questionText: 'React was created by which company?',
			answerOptions: [
				{ answerText: 'Facebook', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How can we start a react app?',
      answerOptions: [
				{ answerText: 'npm start react app', isCorrect: false },
				{ answerText: 'start react app', isCorrect: false },
				{ answerText: 'start react', isCorrect: false },
				{ answerText: 'npm start', isCorrect: true },
			],
		},
	];
 
 
  
   const [currentQustion , setcurrentQustion] = useState(0);
   const [score, setscore] = useState(false);
   const [count, setcount] = useState(0);

   const onclickfunction = (isCorrect) => {

	     if(isCorrect === true){
			 setcount(count + 1)
		 }
		const nextQution = currentQustion + 1;
		if (nextQution < questions.length) {
			setcurrentQustion(nextQution);
		}
		else {
			
			setscore(true);
		}

	}
	return (
		<div className='app'>
			
			{score? (
				<div className='score-section'>You scored {count} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section '>
						<div className='question-count'>
							<span>Question {currentQustion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQustion].questionText}</div>
					</div>
					<div className='answer-section '>
					{questions[currentQustion].answerOptions.map((answerOptions)=> 
					<button onClick={() => onclickfunction(answerOptions.isCorrect) }>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}