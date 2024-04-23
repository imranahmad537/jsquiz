


const correctAnswers = ["ram", "b", "smtp", "saas", "html"];
let marks = 0;



document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  for (let i = 0; i < correctAnswers.length; i++) {
    const selectedOption = document.querySelector('input[name="question' + (i + 1) + '"]:checked');
    if (selectedOption && selectedOption.value === correctAnswers[i]) {
      marks++; // Increment marks if selected option is correct
    }
  }

  // Get roll number from user
  const rollNo = prompt("Please enter your roll number:");

  // Calculate number of wrong questions
  const wrongQuestions = correctAnswers.length - marks;

  // Redirect to result page with query parameters
  window.location.href = "res.html?rollNo=" + encodeURIComponent(rollNo) + "&correctAnswers=" + marks + "&wrongAnswers=" + wrongQuestions;

  // Reset marks for next quiz
  marks = 0;
});

