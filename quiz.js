// Function to check the user's answer
function checkAnswer() {
    // Step 1: Declare the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";

    if (userAnswerElement) {
        userAnswer = userAnswerElement.value;
    }

    // Step 3: Compare user answer with correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // Optional green for success
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // Optional red for error
    }
}

// Step 4: Add event listener to the Submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
