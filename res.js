// Retrieve query parameters from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get roll number, number of correct answers, and number of wrong answers from query parameters
const rollNo = urlParams.get('rollNo');
const correctAnswers = urlParams.get('correctAnswers');
const wrongAnswers = urlParams.get('wrongAnswers');

// Display roll number, number of correct answers, and number of wrong answers
document.getElementById('rollNo').innerText = "Roll No: " + rollNo;
document.getElementById('correctAnswers').innerText = "Correct Answers: " + correctAnswers;
document.getElementById('wrongAnswers').innerText = "Wrong Answers: " + wrongAnswers;
