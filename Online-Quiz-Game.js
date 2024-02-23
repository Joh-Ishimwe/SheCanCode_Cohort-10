// Quiz constructor function
function Quiz(question, options, correctAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  
  // Score tracking variables
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  
  // Array of quiz questions
  const quizQuestions = [
    new Quiz('What is the capital of France?', ['A) Paris', 'B) Berlin', 'C) Madrid', 'D) Rome'], 'A'),
    new Quiz('Which planet is known as the Red Planet?', ['A) Venus', 'B) Mars', 'C) Jupiter', 'D) Saturn'], 'B'),
    new Quiz('What is the largest mammal on Earth?', ['A) Elephant', 'B) Blue Whale', 'C) Giraffe', 'D) Lion'], 'B'),
    new Quiz('Who wrote "Romeo and Juliet"?', ['A) William Shakespeare', 'B) Charles Dickens', 'C) Jane Austen', 'D) Mark Twain'], 'A'),
    new Quiz('What is the powerhouse of the cell?', ['A) Nucleus', 'B) Mitochondria', 'C) Endoplasmic Reticulum', 'D) Golgi Apparatus'], 'B')
  ];
  
  // Function to display a random quiz question
  function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const currentQuestion = quizQuestions[randomIndex];
  
    console.log(currentQuestion.question);
    currentQuestion.options.forEach((option) => console.log(option));
  
    const userAnswer = prompt('Enter the letter of your answer (A, B, C, or D):').toUpperCase();
  
    checkAnswer(currentQuestion, userAnswer);
  
    // Remove the used question from the array to avoid repetition
    quizQuestions.splice(randomIndex, 1);
  
    if (quizQuestions.length > 0) {
      displayRandomQuestion();
    } else {
      displayFinalScore();
    }
  }
  
  // Function to check if the user's answer is correct
  function checkAnswer(question, userAnswer) {
    if (userAnswer === question.correctAnswer) {
      console.log('Correct!\n');
      correctAnswers++;
    } else {
      console.log(`Incorrect! The correct answer was ${question.correctAnswer}.\n`);
      incorrectAnswers++;
    }
  }
  
  // Function to display the final score
  function displayFinalScore() {
    console.log('Quiz completed!');
    console.log(`Correct Answers: ${correctAnswers}`);
    console.log(`Incorrect Answers: ${incorrectAnswers}`);
  }
  
  // Start the quiz
  displayRandomQuestion();
  